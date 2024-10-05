import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  timestamp,
  serial,
  bigserial,
} from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const customers = pgTable("customers", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  customerId: bigserial("customer_id", { mode: "number" }),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type Customer = typeof customers.$inferSelect;

export const customersRelations = relations(customers, ({ one, many }) => ({}));
