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

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');
console.log(value);
await client.hSet('user-session:123', {
  name: 'John',
  surname: 'Smith',
  company: 'Redis',
  age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));