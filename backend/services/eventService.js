const { Event } = require("../models");
const { Op } = require("sequelize");

exports.createOrUpdateEvent = async (eventData) => {
  const existingEvent = await Event.findOne({
    where: { originalUrl: eventData.originalUrl },
  });

  // If event does not exist → create new
  if (!existingEvent) {
    return await Event.create({
      ...eventData,
      status: "new",
      lastScrapedAt: new Date(),
    });
  }

  // Safely compare date
  const existingDate = existingEvent.dateTime
    ? new Date(existingEvent.dateTime).toISOString()
    : null;

  const newDate = eventData.dateTime
    ? new Date(eventData.dateTime).toISOString()
    : null;

  const isUpdated =
    existingEvent.title !== eventData.title ||
    existingDate !== newDate ||
    existingEvent.venueName !== eventData.venueName ||
    existingEvent.description !== eventData.description;

  if (isUpdated) {
    await existingEvent.update({
      ...eventData,
      status: "updated",
      lastScrapedAt: new Date(),
    });
  } else {
    // Just update lastScrapedAt if no changes
    await existingEvent.update({
      lastScrapedAt: new Date(),
    });
  }

  return existingEvent;
};

exports.markInactiveEvents = async () => {
  const now = new Date();

  await Event.update(
    { status: "inactive" },
    {
      where: {
        dateTime: {
          [Op.lt]: now,
        },
      },
    }
  );
};