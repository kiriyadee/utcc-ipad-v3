import { pgTable, text, primaryKey } from "drizzle-orm/pg-core";
import { users } from "./users";
import { uuidv7 } from "uuidv7";

export const roles = pgTable("roles", {
  id: text("id").primaryKey().$defaultFn(() => uuidv7()),
  name: text("name").notNull().unique(),
});

export const usersRoles = pgTable(
  "users_roles",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    roleId: text("role_id")
      .notNull()
      .references(() => roles.id),
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.userId, table.roleId] }),
  })
);
