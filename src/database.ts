import { Pool } from 'pg';
require('dotenv').config();

export const pool = new Pool({
	database: `${process.env.DATABASE_NAME}`,
	user: `${process.env.DATABASE_USERNAME}`,
	password: `${process.env.DATABASE_PASSWORD}`,
	host: `${process.env.DATABASE_HOST}`,
	port: 5432,
});

// links for amazon ecommerce
// Link
// https://github.com/amzn/selling-partner-api-docs

// Developer Guide
// https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md

// References (Main API's)
// https://github.com/amzn/selling-partner-api-docs/tree/main/references
