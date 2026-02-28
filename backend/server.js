const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { sequelize } = require("./models");
const { scrapeEvents } = require("./scraper/scrapeEvents");

const publicRoutes = require("./routes/publicRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", publicRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    await sequelize.sync({ alter: true });
    console.log("Database synced");

    // Initial scrape
    await scrapeEvents();
    console.log("Initial scraping done");

    // 🔥 Automatic scraping every 15 minutes
    setInterval(async () => {
      console.log("Running scheduled scrape...");
      await scrapeEvents();
    }, 1000 * 60 * 15);

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
  }
};

startServer();