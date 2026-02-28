const { Event } = require("../models");

exports.importEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.status === "imported") {
      return res.status(400).json({ message: "Event already imported" });
    }

    event.status = "imported";
    event.importedAt = new Date();
    event.importedBy = req.user.id;
    event.importNotes = req.body.importNotes || null;

    await event.save();

    res.json({ message: "Event imported successfully", event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};