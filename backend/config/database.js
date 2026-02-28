const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // SQLite database file
  logging: false, // Disable SQL logs in console
});

module.exports = sequelize;