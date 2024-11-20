import dotenv from "dotenv";
import mysql, { Pool } from "mysql2/promise";

dotenv.config();

const pool: Pool = mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default pool
