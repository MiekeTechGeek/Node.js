// Quick check 3.1 What object is used to make functions or variables within one module available to others?
// = exports is used to share module properties and functionality within an application, module.exports can also be used in its place. 

// Quick check 3.2 What flag do you use if you want to install a package globally on your computer?
// = The --global or -g flag installs a package for use as a command-line tool globally on your computer. The package can be accessible to other projects, not exclusively to the one you’re working on. 

// Quick check 3.3 What terminal command initializes a Node.js application with a package.json file?
// = npm init initializes a Node.js app and prompts you to create a package.json file. 

// Quick check 4.1 What does a web server receive from the client, and what does it send back?
// = The web server receives requests from the client and sends back responses. 

// Quick check 4.2 Why should you use const instead of var to store the HTTP server in your application?
// = Because your server will continue to listen for communication from clients, it’s
// important not to reassign the variable representing the server. In ES6, it has become convention to
// mark these objects as constants, not reassignable variables.

// Quick check 4.3 When you navigate to http://localhost:3000/ while your server is running, what type of HTTP request are you making?
// = Nearly every request you can expect to make at this stage in the application’s development, including a request to http://localhost:300/, is an HTTP GET request. 
