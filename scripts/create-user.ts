import { users } from "@/schema/users";
import bcrypt from "bcrypt";
import { openConnection } from "./sdb";

/**
 * Script to create a new user with email and password
 * Usage: ts-node create-user.ts <email> <password>
 */
async function createUser(email: string, password: string): Promise<void> {
  // Validate input parameters
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  let connection;
  try {
    // Open database connection
    connection = await openConnection();

    // Hash the password with bcrypt (12 rounds for good security)
    const hashedPassword = await bcrypt.hash(password, 12);

    // Insert the new user into database
    await connection.sdb.insert(users).values({
      email,
      password: hashedPassword,
    });

    console.log(`User ${email} created successfully.`);
  } catch (error) {
    // Log error details and rethrow
    console.error("Failed to create user:", error);
    throw error;
  } finally {
    // Ensure connection is always closed
    if (connection) {
      await connection.closeConnection();
    }
  }
}

// Script entry point
async function main() {
  try {
    const [, , email, password] = process.argv;
    await createUser(email, password);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
    process.exit(1);
  }
}

main();
