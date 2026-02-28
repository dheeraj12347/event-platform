const {
  createOrUpdateEvent,
  markInactiveEvents,
} = require("../services/eventService");

exports.scrapeEvents = async () => {
  try {
    console.log("Starting scrape...");

    const scrapedEvents = [
  {
    title: "Sydney Music Festival",
    dateTime: new Date(Date.now() + 86400000),
    venueName: "Sydney Opera House",
    venueAddress: "Bennelong Point",
    city: "Sydney",
    description: "Annual live music festival featuring international artists.",
    category: "Music",
    imageUrl: "",
    sourceWebsite: "EventSource",
    originalUrl: "https://example.com/event1",
  },
  {
    title: "Tech Innovators Conference 2026",
    dateTime: new Date(Date.now() + 172800000),
    venueName: "ICC Sydney",
    venueAddress: "Darling Harbour",
    city: "Sydney",
    description: "Conference focused on AI, startups, and innovation.",
    category: "Technology",
    imageUrl: "",
    sourceWebsite: "EventSource",
    originalUrl: "https://example.com/event2",
  },
  {
    title: "Startup Networking Night",
    dateTime: new Date(Date.now() + 259200000),
    venueName: "Tech Hub Sydney",
    venueAddress: "George Street",
    city: "Sydney",
    description: "Networking event for startup founders and investors.",
    category: "Business",
    imageUrl: "",
    sourceWebsite: "EventSource",
    originalUrl: "https://example.com/event3",
  },
  {
    title: "Modern Art Exhibition",
    dateTime: new Date(Date.now() + 345600000),
    venueName: "City Art Gallery",
    venueAddress: "Art Street",
    city: "Sydney",
    description: "Exhibition showcasing contemporary artworks.",
    category: "Art",
    imageUrl: "",
    sourceWebsite: "EventSource",
    originalUrl: "https://example.com/event4",
  },
  {
    title: "Food & Wine Festival",
    dateTime: new Date(Date.now() + 432000000),
    venueName: "Harbour Park",
    venueAddress: "Circular Quay",
    city: "Sydney",
    description: "Taste premium wines and gourmet food.",
    category: "Food",
    imageUrl: "",
    sourceWebsite: "EventSource",
    originalUrl: "https://example.com/event5",
  },
  {
    title: "Sydney Marathon 2026",
    dateTime: new Date(Date.now() + 518400000),
    venueName: "Sydney Olympic Park",
    venueAddress: "Olympic Blvd",
    city: "Sydney",
    description: "Annual marathon event across Sydney landmarks.",
    category: "Sports",
    imageUrl: "",
    sourceWebsite: "EventSource",
    originalUrl: "https://example.com/event6",
  },
  {
    title: "Digital Marketing Bootcamp",
    dateTime: new Date(Date.now() + 604800000),
    venueName: "Business Center",
    venueAddress: "Market Street",
    city: "Sydney",
    description: "Intensive workshop on modern digital marketing strategies.",
    category: "Education",
    imageUrl: "",
    sourceWebsite: "EventSource",
    originalUrl: "https://example.com/event7",
  }
];

    for (let event of scrapedEvents) {
      await createOrUpdateEvent(event);
    }

    await markInactiveEvents();

    console.log("Scraping completed successfully");
  } catch (error) {
    console.error("Scraping error:", error.message);
  }
};