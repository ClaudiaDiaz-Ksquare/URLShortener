
// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();


// const DB_PASS = process.env.DB_PASS;
// const DB_USER = process.env.DB_USER;
// const DB_NAME = process.env.DB_NAME;
// const DB_HOSTNAME = process.env.DB_HOSTNAME;

// // URI de connexion
// // const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOSTNAME}:5432/${DB_NAME}`);

// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
//     host: 'localhost',
//     port: 5432,
//     dialect: 'postgres',
// });


// // deifnir modelos



// try {
//     sequelize.authenticate().then((value)=>{
//         console.log("DB connection started");
//     })
// } catch (error) {
//     console.error(error);
//     process.abort();

// }