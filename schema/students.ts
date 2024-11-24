import { sql, relations } from "drizzle-orm";
import {
  pgTable,
  bigserial,
  varchar,
  timestamp,
  text,
} from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const students = pgTable("students", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  studentId: bigserial("student_id", { mode: "number" }),
  fristName: varchar("frist_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Student = typeof students.$inferSelect;

export const studentsRelations = relations(students, ({ one, many }) => ({}));
