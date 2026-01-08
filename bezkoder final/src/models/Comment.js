// Import mongoose for MongoDB object modeling
const mongoose = require("mongoose");

// Create a Mongoose model named "Comment"
const Comment = mongoose.model(
    "Comment",
    // Define the schema for the Comment collection
    new mongoose.Schema({
        // Username of the person who wrote the comment
        username: String,

        // Content/text of the comment
        text: String,

        // Date and time when the comment was created
        createdAt: Date
    })
);

// Export the Comment model for use in other files
module.exports = Comment;
