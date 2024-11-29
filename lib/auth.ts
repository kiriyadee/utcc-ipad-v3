import { db } from "@/lib/db";
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { Provider } from "next-auth/providers";
import { eq } from "drizzle-orm";
import { accounts, sessions, users, verificationTokens } from "@/schema/users";
import { cookies, type UnsafeUnwrappedCookies } from "next/headers";
import { encode, decode } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import { uuidv7 } from "uuidv7";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

type SessionStrategy = "jwt" | "database";

const SESSION_STRATEGY: SessionStrategy = "database";

const adapter = {
  ...DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  createUser: async (data: any) => {
    const newUser = {
      id: uuidv7(),
      email: data.email,
      name: data.name,
      image: data.image,
      emailVerified: data.emailVerified,
    };

    await db.insert(users).values(newUser);
    return newUser;
  },
};

if ((SESSION_STRATEGY as SessionStrategy) === "database") {
  adapter.getSessionAndUser = async (sessionToken: string) => {
    const session = await db.query.sessions.findFirst({
      where: eq(sessions.sessionToken, sessionToken),
    });
    if (!session) return null;
    const user = await db.query.users.findFirst({
      where: eq(users.id, session.userId),
    });
    return { user: user as AdapterUser, session: session };
  };
}

const fromDate = (time: number, date = Date.now()) => {
  return new Date(date + time * 1000);
};

const providers: Provider[] = [
  Google,
  Credentials({
    credentials: {
      email: {},
      password: { type: "password" },
    },
    authorize: async (credentials) => {
      const email = credentials.email as string;
      const password = credentials.password as string;
      const user = await db.query.users.findFirst({
        where: eq(users.email, email),
      });
      if (!user) {
        throw new Error("User not found.");
      }
      if (!user.password) {
        throw new Error("Password not found.");
      }
      const valid = bcrypt.compareSync(password, user.password);
      if (!valid) {
        throw new Error("Invalid password.");
      }
      if ((SESSION_STRATEGY as SessionStrategy) === "database") {
        const sessionToken = crypto.randomUUID();
        const sessionExpiry = fromDate(3600);
        await adapter.createSession!({
          sessionToken: sessionToken,
          expires: sessionExpiry,
          userId: user.id,
        });
        const cookieStore = await cookies();
        cookieStore.set("next-auth.session-token", sessionToken, {
          expires: sessionExpiry,
        });
      }
      return user;
    },
  }),
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: adapter,
  session: {
    strategy: SESSION_STRATEGY,
  },
  providers,
  pages: {
    signIn: "/signin",
  },
  jwt: {
    encode: (params) => {
      if ((SESSION_STRATEGY as SessionStrategy) === "database") {
        const cookie = (cookies() as unknown as UnsafeUnwrappedCookies).get("next-auth.session-token");
        if (cookie) {
          return cookie.value;
        } else {
          return "";
        }
      }
      return encode(params);
    },
    decode: (params) => {
      return decode(params);
    },
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token, user }) {
      switch (SESSION_STRATEGY as SessionStrategy) {
        case "database":
          session.user.id = user.id;
          break;
        case "jwt":
          session.user.id = token.id as string;
          break;
        default:
          break;
      }
      return session;
    },
  },
});
