import dotenv from 'dotenv';
dotenv.config();
export const config = {
  dbUrl: process.env.TEST_DB_URL,
  jwt: process.env.TEST_JWT,
  port: process.env.TEST_PORT
}