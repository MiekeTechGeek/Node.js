// Quick check 24.1 True or false: A salt is needed to hash passwords.
// = False. Salts help make the hashing of passwords stronger by mixing random text
// with plain-text passwords before they’re hashed, but salts aren’t required.

// Quick check 24.2 Why does Passport.js need you to save the hash and the salt in your database?
// = Passport.js saves the salt and the hash so that each user can have their own
// unique hashing factors. It’s possible to use the same salt for every user account and only store the
// hash in the database, but this approach is less secure.

// Quick check 24.3 How do you have access to Passport.js methods on the request throughout the application?
// = Because you added the passport module as middleware within Express.js, you
// have access to the library of methods provided by Passport.js. These methods are extended to the
// request as it enters the application. As that request is passed through the middleware chain, you can
// call these passport methods on it anywhere you like. 