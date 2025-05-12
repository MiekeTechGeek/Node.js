// Quick check 26.1 Why do you add app.use("/", router) in main.js?
// = When the router is defined in main.js, you need to tell the Express.js application to use it as middleware. 

// Quick check 26.2 What method do you use on the response to send data as JSON back to the client?
// = In Express.js, you can use res.json followed by the parameters you’d like to send in JSON format.

// What do you expect will happen if there are no courses in the database when you make an Ajax request?
// = The Ajax request returns an array of items from the database. If there are no
// records, the response contains an empty array.
