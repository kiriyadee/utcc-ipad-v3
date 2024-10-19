import { users } from "@/schema/users";
import bcrypt from "bcrypt";
import { openConnection } from "./sdb";

async function main() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error("Email and password are required.");
    process.exit(1);
  }

  try {
    const { sdb, closeConnection } = await openConnection();
    const hash = await bcrypt.hash(password, 12);
    await sdb.insert(users).values({ email: email, password: hash });
    await closeConnection();
    console.log("User created successfully.");
  } catch (error) {
    console.error("Error creating user:", error);
    process.exit(1);
  }
}

main();
