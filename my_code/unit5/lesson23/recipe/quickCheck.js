// Quick check 23.1 Why does the placement of the /users/login route matter in main.js?
// = Because you have routes that handle parameters in the URL, if those routes
// (such as /users/:id) come first, Express.js will treat a request to /users/login as a request to the
// user’s show page, where login is the :id. Order matters: if the /users/login route comes first,
// Express.js will match that route before checking the routes that handle parameters. 

// Quick check 23.2 True or false: bcrypt’s compare method compares the plain-text password in your database with the plain-text value from the user’s input.
// = False. The only password value in the database is a hashed password, so there’s
// no plain-text value to compare against. The comparison works by hashing the user’s new input and comparing the newly created hashed value with the stored hash value in the database. This way, the application still won’t know your actual password, but if two hashed passwords match, you can safely say that
// your input matched the original password you set up. 

// Quick check 23.3 What’s the difference between a sanitizer and a validator?
// = A sanitizer cleans data by trimming whitespace, changing the case, or removing
// unwanted characters. A validator tests data quality to ensure that the way it was entered meets your
// database requirements. 