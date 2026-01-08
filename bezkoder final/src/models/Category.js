// Import mongoose library for MongoDB object modeling
const mongoose = require("mongoose");

// Create a Mongoose model named "Category"
const Category = mongoose.model(
    "Category",
    // Define the schema for the Category collection
    new mongoose.Schema({
        // Name of the category
        name: String,

        // Description of the category
        description: String
    })
);

// Export the Category model to use it in other files
module.exports = Category;
