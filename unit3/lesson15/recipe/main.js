"use strict";

// Import required modules
const express = require("express"),            // Express framework for building web servers
    layouts = require("express-ejs-layouts"),  // Middleware for EJS template layouts
    mongoose = require("mongoose"),            // Mongoose library to interact with MongoDB
    app = express(),                           // Create an Express application instance
    port = 3000,                               // Port number the server will listen on
    homeController = require("/controllers/homeController"),       // Controller for home and courses routes
    subscribersController = require("./controllers/subscribersController"), // Controller for subscriber routes
    errorController = require("./controllers/errorController");     // Controller for error handling

// === Database Connection ===
mongoose.connect("mongodb://127.0.0.1:27017/confetti_cuisine", {
    useNewUrlParser: true,       // Parse MongoDB connection string correctly
    useUnifiedTopology: true     // Use the new topology engine
});
mongoose.Promise = global.Promise; // Use native promises
mongoose.connection.once("open", () => {
    console.log("\n✅ Connected to MongoDB successfully!");
});

// === View Engine Setup ===
app.set("view engine", "ejs");  // Set EJS as the template engine
app.use(layouts);               // Enable EJS layouts
app.use(express.static("public")); // Serve static files (CSS, JS, images) from "public"

// === Middleware ===
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded form data
app.use(express.json());                          // Parse JSON request bodies

// === ROUTES ===
// Home and courses pages
app.get("/", homeController.showHome);           // Render home page
app.get("/courses", homeController.showCourses); // Render courses page

// Contact and subscription routes
app.get("/contact", subscribersController.getSubscriptionPage); // Show subscription form
app.post("/subscribe", subscribersController.saveSubscriber);   // Save new subscriber

// Display all subscribers
app.get("/subscribers", subscribersController.getAllSubscribers); // List all subscribers

// === ERROR HANDLING ===
app.use(errorController.logErrors);             // Log errors to console
app.use(errorController.respondNoResourceFound); // Handle 404 Not Found
app.use(errorController.respondInternalError);  // Handle 500 Internal Server Error

// === Start Server ===
app.listen(port, () => {
    console.log(`\n🚀 Confetti Cuisine running on port ${port}`);
});
