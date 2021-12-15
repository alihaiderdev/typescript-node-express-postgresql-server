// const { Sequelize, DataTypes } = require('sequelize');
import { Sequelize, DataTypes } from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(
	`${process.env.DATABASE_NAME}`,
	`${process.env.DATABASE_USERNAME}`,
	`${process.env.DATABASE_PASSWORD}`,
	{
		host: `${process.env.DATABASE_HOST}`,
		port: 8080,
		dialect: 'postgres',
		logging: console.log,
		pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
	}
);

// const sequelize = new Sequelize(databaseName, 'username', 'password', {
// 	host: 'localhost',
// 	dialect: 'postgres',
// 	logging: console.log,
// 	pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
// });

sequelize
	.authenticate()
	.then(() => console.log('Connected to database'))
	.catch((error) => console.log('Error : ', error));

const db: any = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize
	.sync({ force: false })
	.then(() => console.log('yes table sync to db'));

db.emailTemplate = require('./emailTemplateModel')(sequelize, DataTypes);

export default db;
