const sequelize = require("../config/database");

const Event = require("./Event");
const User = require("./User");
const EmailCapture = require("./EmailCapture");

EmailCapture.belongsTo(Event, {
  foreignKey: "eventId",
  onDelete: "CASCADE",
});

Event.hasMany(EmailCapture, {
  foreignKey: "eventId",
});

module.exports = {
  sequelize,
  Event,
  User,
  EmailCapture,
};