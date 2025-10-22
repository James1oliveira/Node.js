"use strict";
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const Course = require("./models/course");
mongoose.connect("mongodb://localhost:27017/recipe_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.once("open", async () => {
    console.log("n Connected to MongoDB");
    try {
        await Subscriber.deleteMany({});
        await Course.deleteMany({});
        const course = await Course.create({
            title: "Intro to Samosas",
            description: "Learn how to make the perfect samosas!",
            items: ["Flour", "Spices", "Potatoes"],
            zipCode: 12345
        });
        console.log("n Course created:", course.title);
        const subscriber = await Subscriber.create({
            name: "James oliveira",
            email: "oliveira1james@gmail.com",
            zipCode: 12345
        });
        console.log("n Subscriber created:", subscriber.getInfo());
        subscriber.courses.push(course._id);
        await subscriber.save();
        const populatedSub = await Subscriber.findOne({ email: "oliveira1james@gmail.com" })
            .populate("courses")
            .exec();
        console.log("\n=== Subscriber with Populated Courses ===");
        console.log(populatedSub);
    } catch (err) {
        console.error("n Error:", err.message);
    } finally {
        mongoose.connection.close();
    }
});