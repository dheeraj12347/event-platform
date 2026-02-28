const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define(
  "Event",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    venueName: DataTypes.STRING,
    venueAddress: DataTypes.STRING,
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    sourceWebsite: DataTypes.STRING,
    originalUrl: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("new", "updated", "inactive", "imported"),
      defaultValue: "new",
    },
    lastScrapedAt: DataTypes.DATE,
    importedAt: DataTypes.DATE,
    importedBy: DataTypes.INTEGER,
    importNotes: DataTypes.TEXT,
  },
  {
    timestamps: true,
    indexes: [
      {
        fields: ["city"],
      },
      {
        fields: ["dateTime"],
      },
    ],
  }
);

module.exports = Event;