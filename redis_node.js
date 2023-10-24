import dotenv from "dotenv";
import { createClient } from "redis";
dotenv.config();

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

await client.set("bike:1", "Process 134");
const value = await client.get("bike:1");
console.log(value);
// returns 'Process 134'

await client.quit();
