"use strict";

// Import the Subscriber Mongoose model
const Subscriber = require("../models/subscriber");

// Controller to render the subscription/contact form page
exports.getSubscriptionPage = (req, res) => {
    res.render("contact"); // Render the 'contact' EJS template
};

// Controller to save a new subscriber to the database
exports.saveSubscriber = (req, res) => {
    // Create a new Subscriber instance with data from the request body
    let newSubscriber = new Subscriber({
        name: req.body.name,       // Subscriber's name from form input
        email: req.body.email,     // Subscriber's email from form input
        zipCode: req.body.zipCode  // Subscriber's ZIP code from form input
    });

    // Save the new subscriber to MongoDB
    newSubscriber
        .save()
        .then(result => {
            console.log("✅ Subscriber saved:", result); // Log the saved document
            res.render("thanks"); // Render a 'thanks' page after successful save
        })
        .catch(error => {
            console.error("⚠️ Error saving subscriber:", error); // Log any errors
            res.send(error); // Send the error response to the client
        });
};

// Controller to display all subscribers
exports.getAllSubscribers = (req, res) => {
    // Query the database for all Subscriber documents
    Subscriber.find({})
        .exec() // Execute the query
        .then(subscribers => {
            res.render("subscribers", { subscribers: subscribers }); // Render 'subscribers' view with data
        })
        .catch(error => {
            console.error(error.message); // Log any errors
            res.send(error); // Send the error response to the client
        });
};
