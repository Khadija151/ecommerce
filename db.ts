// db.ts
import mysql, { Pool } from 'mysql2/promise';

const db: Pool = mysql.createPool({
  host: 'localhost',
  user: 'khadijaIshaq',
  password: 'Hitler@12345',
  database: 'skateshop',
});

export default db;
