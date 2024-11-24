import * as customers from "@/schema/customers";
import * as students from "@/schema/students";
import * as posts from "@/schema/posts";
import * as roles from "@/schema/roles";
import * as users from "@/schema/users";

export const schema = {
  ...customers,
  ...students,
  ...posts,
  ...roles,
  ...users,
};
