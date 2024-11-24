import { and, eq } from "drizzle-orm";
import { db } from "./db";
import { roles, usersRoles } from "@/schema/roles";

export async function hasAdminRole(userId: string) {
  const userRole = await db
    .select()
    .from(usersRoles)
    .innerJoin(roles, eq(usersRoles.roleId, roles.id))
    .where(and(eq(usersRoles.userId, userId), eq(roles.name, "admin")));
  return userRole.length > 0;
}
