// Quick check 18.1 How are virtual attributes different from normal model attributes?
// = Virtual attributes aren’t saved in the database. These attributes, unlike normal
// schema attributes, exist only while the application is running; they can’t be extracted from the database
// or found directly through MongoDB. 

// Quick check 18.2 What CRUD functions don’t necessarily need a view?
// = Although every CRUD function can have its own view, some functions could live in
// modals or be accessed through a basic link request. The delete function doesn’t necessarily need its
// own view because you’re sending a command to delete a record. 

// Quick check 18.3 What is the purpose of the index view?
// = The index view displays all documents for a particular model. This view can be used
// internally by a company to see the names and email addresses of everyone who subscribed. It can also
// be visible to all users so that everyone can see who signed up.

// Quick check 18.4 Why do you need to log error messages to the console if you’re working mainly in the browser?
// = Although you’re moving more data and functionality into the views, your terminal is
// still the heart of your application. Your console window is where you should expect to see application
// errors, requests made, and custom error messages you create so that you’ll know where to look to fix
// the problem. 