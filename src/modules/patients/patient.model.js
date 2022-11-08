const path = require("path");
const sequelize = require(path.join(process.cwd(), "/src/config/lib/sequelize.js"));
const { DataTypes } = require("sequelize");

const Patient = sequelize.define(
	"patients",
	{
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		password: {
			allowNull: false,
			type: DataTypes.UUID,
		}
	},
	{
		tableName: "patients",
		timestamps: false,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);
module.exports = Patient;