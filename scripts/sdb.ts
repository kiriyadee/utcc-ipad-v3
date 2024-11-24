import { schema } from "@/lib/schema";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

dotenv.config({ path: ".env" });

export async function openConnection() {
  const client = new Client({ connectionString: process.env.DB_URL });
  await client.connect();
  const sdb = drizzle(client, { schema });
  const closeConnection = async () => await client.end();
  return {
    sdb,
    closeConnection,
  };
}
