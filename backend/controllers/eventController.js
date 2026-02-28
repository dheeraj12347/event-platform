const { Event } = require("../models");
const { Op } = require("sequelize");

exports.getEvents = async (req, res) => {
  try {
    const { city, keyword, startDate, endDate } = req.query;

    const where = {
      status: {
        [Op.ne]: "inactive",
      },
    };

    if (city) {
      where.city = city;
    }

    if (keyword) {
      where[Op.or] = [
        { title: { [Op.like]: `%${keyword}%` } },
        { venueName: { [Op.like]: `%${keyword}%` } },
        { description: { [Op.like]: `%${keyword}%` } },
      ];
    }

    if (startDate && endDate) {
      where.dateTime = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    const events = await Event.findAll({
      where,
      order: [["dateTime", "ASC"]],
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};