const express = require("express");
const router = express.Router();

const { getEvents } = require("../controllers/eventController");
const { captureEmail } = require("../controllers/emailController");

// Public Event Listing
router.get("/events", getEvents);

// Email capture before redirect
router.post("/email", captureEmail);

module.exports = router;
