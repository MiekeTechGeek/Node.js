// const express = require("express");
// const app = express();
// const errorController = require("./controllers/errorController");
// const homeController = require("./controllers/homeController");
// const layouts = require("express-ejs-layouts");
// const mongoose = require("mongoose");
// const Subscriber = require("./models/subscriber");
// const subscriberController = require("./controllers/subscribersController");

// mongoose.connect("mongodb://0.0.0.0:27017/recipe_db", {
//     useNewUrlParser: true,
// });

// const db = mongoose.connection;
// db.once("open", () => {
//     console.log("Successfully connected to MongoDB using Mongoose!");
// });

// app.use(
//     express.urlencoded({
//         extended: false,
//     })
// )

// app.use(express.json());
// app.use(express.static("public"));

// let exampleinstance = new Subscriber({
//     name: "Mieke",
//     email: "miekep@gmail.com",
//     zipCode: 12345,
// });

// console.log(exampleinstance.getInfo());
// console.log(exampleinstance.findLocalSubscribers());

const mongoose = require("mongoose");
const Subscriber = require("../recipe_app/models/subscriber"); // Ensure correct path

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/recipe_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", () => {
    console.log(" Successfully connected to MongoDB using Mongoose!");
});

// Sample subscriber instance
const testSubscriber = new Subscriber({
    name: "Mieke",
    email: "miekep@gmail.com",
    zipCode: 12345
});

// Save the subscriber and log the result
testSubscriber.save()
    .then(() => {
        console.log(" Test subscriber saved:", testSubscriber.getInfo());
        return testSubscriber.findLocalSubscribers();
    })
    .then(localSubscribers => {
        console.log(" Local subscribers:", localSubscribers);
    })
    .catch(err => {
        console.error(" Error:", err);
    })
    .finally(() => {
        mongoose.connection.close();
        console.log(" MongoDB connection closed.");
    });

