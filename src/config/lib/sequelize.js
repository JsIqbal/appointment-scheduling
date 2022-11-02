const path = require("path");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("appointment", 'root','', {
	host: 'localhost',
	dialect: "mysql",
	logging: false,
	sync: true,
});

module.exports = sequelize;