// Import the mongoose library, which is used to interact with MongoDB
const mongoose = require("mongoose");

// Define a Mongoose model called "Image"
// This represents a collection in MongoDB where each document corresponds to an image
const Image = mongoose.model(
    "Image", // Name of the model (and the collection in MongoDB, pluralized to "images")
    new mongoose.Schema({
        path: String,      // The local file path or storage path of the image
        url: String,       // The public URL to access the image
        caption: String,   // Optional text caption or description for the image
        createdAt: Date    // Timestamp indicating when the image was created
    })
);

// Export the Image model so it can be used in other parts of the application
module.exports = Image;
