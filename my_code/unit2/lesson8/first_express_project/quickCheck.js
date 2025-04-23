// Quick check 8.1 What happens if you don’t use the --save flag when installing Express.js for
// your application?
// = Without the --save flag, your Express.js installation won’t be marked as an application dependency. Your application will still run locally, because Express.js will be downloaded to your project’s node_modules folder, but if you upload your application code without that folder, there’s no
// indication in your package.json file that the Express.js package is needed to run your application. 

// Quick check 8.2 What’s the difference between the express and app constants?
// = app represents most of your application, the routes, and access to other modules.
// express represents a wider range of methods that aren’t necessarily scoped to your application.
// express could offer a method to analyze or parse some text on which your application doesn’t necessarily depend. 

// Quick check 8.3 Why do most developers use web frameworks instead of building web applications from scratch?
// = Web frameworks make development work a lot easier. Web development is fun,
// and the best parts aren’t the tedious tasks that are most subject to errors. With web frameworks,
// developers and businesses alike can focus on the more interesting parts of applications. 