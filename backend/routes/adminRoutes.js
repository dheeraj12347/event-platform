const express = require("express");
const router = express.Router();
const { importEvent } = require("../controllers/adminController");
const { verifyToken } = require("../middleware/authMiddleware");

router.patch("/import/:id", verifyToken, importEvent);

module.exports = router;