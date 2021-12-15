import { Pool } from 'pg';
require('dotenv').config();

export const pool = new Pool({
	database: `${process.env.DATABASE_NAME}`,
	user: `${process.env.DATABASE_USERNAME}`,
	password: `${process.env.DATABASE_PASSWORD}`,
	host: `${process.env.DATABASE_HOST}`,
	port: 5432,
});
