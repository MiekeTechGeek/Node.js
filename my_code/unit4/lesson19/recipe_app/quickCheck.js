// Quick check 19.1 Which form input attribute must have a value for controller actions to identify form data?
// = The name attribute must be filled in on the form to create a new record. Whatever
// value is mapped to the name attribute is what the controller uses to compare against the model
// schema. 

// Quick check 19.2 Why does the Mongoose pre("save") hook take next as a parameter?
// = The pre("save") hook is Mongoose middleware, and as with other middleware,
// when the function completes, it moves on to the next middleware function. next here indicates the next
// function in the middleware chain to be called.

// Quick check 19.3 True or false: the URL parameter representing the user’s ID must be called :id.
// = False. The :id parameter is essential for getting the ID of the user you’re trying to
// display, but this parameter can be referenced by any name you choose. If you decide to use :userId,
// make sure that you use that name consistently throughout your code. 

