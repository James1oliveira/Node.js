"use strict";

// Controller function to render the home page
exports.showHome = (req, res) => {
    res.render("index"); // Render the 'index' EJS template
};

// Controller function to render the courses page
exports.showCourses = (req, res) => {
    // Render the 'courses' EJS template and pass data to it
    res.render("courses", {
        offeredCourses: [
            "Italian Cooking",      // Example course
            "Vegetarian Dishes",    // Example course
            "Baking Basics",        // Example course
            "Sushi for Beginners"   // Example course
        ]
    });
};
