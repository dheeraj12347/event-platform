const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EmailCapture = sequelize.define(
  "EmailCapture",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    consent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = EmailCapture;