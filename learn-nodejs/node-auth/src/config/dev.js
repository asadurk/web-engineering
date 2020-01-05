import dotenv from 'dotenv';
dotenv.config();
export const config = {
  dbUrl: process.env.DEV_DB_URL,
  jwt: process.env.DEV_JWT,
  port: process.env.DEV_PORT
}
