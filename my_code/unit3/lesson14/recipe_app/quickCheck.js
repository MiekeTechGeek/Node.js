// Quick check 14.1 What is an ODM?
// ODM is an object-document mapper, which is the role of Mongoose in your application development. ODM (like an object-relational mapper) makes it easier to think purely in terms of
// objects in your application and not worry about how your data is structured in the database. 

// Quick check 14.2 True or false: Using new Subscriber({ name: "Jon", email:
// "jon@jonwexler.com" }) saves a new record to your database.
// False. This code only creates a new virtual object. If you store the value of this line
// to a variable and call save on that variable, the new subscriber is stored in the database. 

// Quick check 14.3 What two components are required for each field specified in a Mongoose schema?
// = The schema requires a property name and data type. 