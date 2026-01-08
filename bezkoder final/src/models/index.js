// Export all the models from a single module so they can be easily imported elsewhere
module.exports = {
    Tutorial: require("./Tutorial"),   // Import and export the Tutorial model
    Image: require("./Image"),         // Import and export the Image model
    Comment: require("./Comment"),     // Import and export the Comment model
    Category: require("./Category")    // Import and export the Category model
};

// This allows other parts of the application to do:
// const db = require("./models");
// db.Tutorial, db.Image, db.Comment, db.Category
