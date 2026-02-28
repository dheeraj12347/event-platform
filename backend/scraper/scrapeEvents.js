const axios = require("axios");
const cheerio = require("cheerio");

const {
  createOrUpdateEvent,
  markInactiveEvents,
} = require("../services/eventService");

exports.scrapeEvents = async () => {
  try {
    console.log("Starting scrape...");

    // Example request (placeholder for real scraping later)
    await axios.get("https://example.com", { timeout: 5000 });

    // ------------------------------
    // Simulated Multi-Source Events
    // ------------------------------

    const eventbriteEvents = [
      {
        title: "Sydney Music Festival",
        dateTime: new Date(Date.now() + 86400000),
        venueName: "Sydney Opera House",
        venueAddress: "Bennelong Point",
        city: "Sydney",
        description:
          "Annual live music festival featuring international artists.",
        category: "Music",
        imageUrl: "https://source.unsplash.com/400x300/?concert",
        sourceWebsite: "Eventbrite",
        originalUrl: "https://eventbrite.com/event1",
      },
      {
        title: "Tech Innovators Conference 2026",
        dateTime: new Date(Date.now() + 172800000),
        venueName: "ICC Sydney",
        venueAddress: "Darling Harbour",
        city: "Sydney",
        description:
          "Conference focused on AI, startups, and innovation.",
        category: "Technology",
        imageUrl: "https://source.unsplash.com/400x300/?technology",
        sourceWebsite: "Eventbrite",
        originalUrl: "https://eventbrite.com/event2",
      },
    ];

    const meetupEvents = [
      {
        title: "Startup Networking Night",
        dateTime: new Date(Date.now() + 259200000),
        venueName: "Tech Hub Sydney",
        venueAddress: "George Street",
        city: "Sydney",
        description:
          "Networking event for startup founders and investors.",
        category: "Business",
        imageUrl: "https://source.unsplash.com/400x300/?networking",
        sourceWebsite: "Meetup",
        originalUrl: "https://meetup.com/event1",
      },
      {
        title: "Comedy Night Live",
        dateTime: new Date(Date.now() - 86400000), // Past event
        venueName: "Sydney Theatre",
        venueAddress: "King Street",
        city: "Sydney",
        description:
          "Stand-up comedy featuring top comedians.",
        category: "Entertainment",
        imageUrl: "https://source.unsplash.com/400x300/?comedy",
        sourceWebsite: "Meetup",
        originalUrl: "https://meetup.com/event2",
      },
    ];

    const scrapedEvents = [...eventbriteEvents, ...meetupEvents];

    for (let event of scrapedEvents) {
      await createOrUpdateEvent(event);
    }

    // Mark expired events
    await markInactiveEvents();

    console.log("Scraping completed successfully");
  } catch (error) {
    console.error("Scraping error:", error.message);
  }
};