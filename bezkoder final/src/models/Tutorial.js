// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Define the Tutorial model
const Tutorial = mongoose.model(
    "Tutorial", // Name of the model (MongoDB will use the plural form "tutorials" for the collection)
    
    // Define the schema for the Tutorial model
    new mongoose.Schema({
        title: String, // Title of the tutorial
        author: String, // Name of the author or creator
        images: [], // Array to store images related to the tutorial (can hold strings or objects depending on usage)
        
        // Array of references to Comment documents
        // This establishes a relationship between a tutorial and its comments
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], 
        
        // Reference to a Category document
        // This creates a relationship linking the tutorial to a specific category
        category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
    })
);

// Export the Tutorial model so it can be used in other parts of the application
module.exports = Tutorial;
