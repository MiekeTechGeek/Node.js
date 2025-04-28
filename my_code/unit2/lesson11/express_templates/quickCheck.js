// Quick check 11.1 What’s the purpose of the scripts object in your package.json file?
// = The scripts object allows you to define aliases for commands that you want to run with npm. 

// Quick check 11.2 Why does your middleware that handles missing routes go after your normal application routes?
// = The middleware function that responds with 404 status codes acts like an else in
// and if-else code block. If no other route paths match the request, this function responds with the message to your user. 

// Quick check 11.3 What important static files live in your public folder?
// = Your public folder contains static HTML files for your error pages. If something goes wrong in your application, these files can be served back to the client.

