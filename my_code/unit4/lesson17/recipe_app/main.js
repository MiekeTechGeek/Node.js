// "use strict";

// const express = require("express");
// const app = express();
// const errorController = require("./controllers/errorController");
// const homeController = require("./controllers/homeController");
// const layouts = require("express-ejs-layouts");
// const mongoose = require("mongoose");
// const Subscriber = require("./models/subscriber");
// const subscriberController = require("./controllers/subscribersController");

// //connecting to database
// mongoose.connect("mongodb://0.0.0.0:27017/recipe_db",
//   { useNewUrlParser: true }
// );

// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("Successfully connected to MongoDB using Mongoose!");

// });

// //finding a document that matches the name given
// const query = Subscriber.find({ name: "Leotha Gradwell" }).exec();
// query
//   .then(docs => {
//     console.log(docs); // Handle the results
//   })
//   .catch(err => {
//     console.error(err); // Handle errors
//   });

// app.set("port", process.env.PORT || 3000);
// app.set("view engine", "ejs");

// app.use(express.static("public"));
// app.use(layouts);
// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );
// app.use(express.json());
// app.use(homeController.logRequestPaths);

// app.get("/", homeController.index);//index.ejs
// app.get("/courses", homeController.showCourses);//courses.ejs

// app.get("/subscribers", subscriberController.getAllSubscribers, (req, res, next) => {
//     res.render("subscribers", {subscribers: req.data});
//   }//subscribers.ejs
// );

// app.get("/contact", subscriberController.getSubscriptionPage);
// app.post("/subscribe", subscriberController.saveSubscriber);

// app.use(errorController.logErrors);
// app.use(errorController.respondNoResourceFound);
// app.use(errorController.respondInternalError);

// app.listen(app.get("port"), () => {
//   console.log(`Server running at http://localhost:${app.get("port")}`);
// });

"use strict";

const express = require("express");
const mongoose = require("mongoose");
const Subscriber = require("../recipe_app/models/subscriber"); // Match test.js path

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/recipe_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("✅ Successfully connected to MongoDB using Mongoose!");
});

// Middleware Configuration
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Sample Subscribers Data
const subscribers = [
    { name: "Tom", email: "tom@email.com", zipCode: 12345 },
    { name: "Bob", email: "bob@email.com", zipCode: 12345 },
    { name: "Cathy", email: "cathy@email.com", zipCode: 12345 },
    { name: "David", email: "david@email.com", zipCode: 12345 },
    { name: "Ella", email: "ella@email.com", zipCode: 12345 },
    { name: "Frank", email: "frank@email.com", zipCode: 54321 },
    { name: "Grace", email: "grace@email.com", zipCode: 23456 },
    { name: "Henry", email: "henry@email.com", zipCode: 34567 },
    { name: "Isabel", email: "isabel@email.com", zipCode: 45678 },
    { name: "James", email: "james@email.com", zipCode: 56789 }
];

// Insert Subscribers into the Database
Subscriber.insertMany(subscribers)
    .then(result => {
        console.log("✅ Subscribers added successfully:");
        result.forEach(sub => console.log(sub.getInfo()));
    })
    .catch(err => {
        console.error("❌ Error adding subscribers:", err.message);
    })
    .finally(() => {
        mongoose.connection.close();
        console.log("🔌 MongoDB connection closed.");
    });

// Create and Find Local Subscribers
const john = new Subscriber({ name: "John", email: "john@email.com", zipCode: 12345 });

john.findLocalSubscribers()
    .then(localSubscribers => console.log("🔍 Local subscribers found:", localSubscribers))
    .catch(err => console.error("❌ Error finding local subscribers:", err));

console.log(john.getInfo());

// Start Express Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});