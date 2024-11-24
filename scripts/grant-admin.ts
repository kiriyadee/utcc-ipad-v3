import { eq } from "drizzle-orm";
import { openConnection } from "./sdb";
import { users } from "@/schema/users";
import { roles, usersRoles } from "@/schema/roles";

async function main() {
  const { sdb, closeConnection } = await openConnection();

  const email = process.argv[2];

  const user = await sdb.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!user) {
    throw new Error("user not found " + email);
  }

  let role = await sdb.query.roles.findFirst({
    where: eq(roles.name, "admin"),
  });

  if (!role) {
    await sdb.insert(roles).values({ name: "admin" });
  }

  role = await sdb.query.roles.findFirst({
    where: eq(roles.name, "admin"),
  });

  if (!role) {
    throw new Error("role not found");
  }

  await sdb
    .insert(usersRoles)
    .values({ userId: user.id, roleId: role.id });

  await closeConnection();
}

main();
