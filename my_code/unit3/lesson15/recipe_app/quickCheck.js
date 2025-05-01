// Quick check 15.1 From what module do you pass data to the view?
// = You can pass data to the view from your controller. Within subscribersController.js, you pass an array of subscribers within the rendered subscribers.ejs.

// Quick check 15.2 What middleware is needed in addition to Express.js to process data from a form?
// = To easily parse the body of a request, you need the help of the express.json and
// express.urlencoded middleware function. These modules act as middleware between your request
// being received and processed fully with Express.js. 

// Quick check 15.3 True or false: using exec on a Mongoose query is the same as running a
// query that returns a new promise.
// = True. exec is designed to run a query and return a promise if promises are configured with your Mongoose setup.