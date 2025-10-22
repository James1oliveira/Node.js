"use strict";

// Import required modules
const mongoose = require("mongoose"),          // Mongoose library for MongoDB interaction
    Subscriber = require("./models/subscriber"); // Subscriber Mongoose model

// === Connect to MongoDB ===
mongoose.connect("mongodb://127.0.0.1:27017/confetti_cuisine", {
    useNewUrlParser: true,      // Parse connection string correctly
    useUnifiedTopology: true    // Use new topology engine
});
mongoose.Promise = global.Promise; // Use native promises

// === Sample subscriber data to seed the database ===
const subscribers = [
    { name: "John Doe", email: "john@example.com", zipCode: 12345 },
    { name: "Jane Smith", email: "jane@example.com", zipCode: 67890 }
];

// === Seed the database ===
// First, delete all existing subscribers
Subscriber.deleteMany()
    .then(() => {
        // After deleting, create new subscriber documents using the array above
        return Promise.all(
            subscribers.map(s => Subscriber.create(s))
        );
    })
    .then(results => {
        console.log("\n✅ Database seeded:", results); // Log all inserted documents
        mongoose.connection.close(); // Close the database connection
    })
    .catch(error => {
        console.error("⚠️ Error seeding database:", error); // Log any errors
    });
