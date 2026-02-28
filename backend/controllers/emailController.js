const { EmailCapture, Event } = require("../models");

exports.captureEmail = async (req, res) => {
  try {
    const { email, consent, eventId } = req.body;

    if (!email || !consent || !eventId) {
      return res.status(400).json({
        message: "Email, consent and eventId are required",
      });
    }

    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const capture = await EmailCapture.create({
      email,
      consent,
      eventId,
    });

    res.json({
      message: "Email saved successfully",
      data: capture,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};