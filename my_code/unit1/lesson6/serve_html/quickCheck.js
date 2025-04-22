// Quick check 6.1 What happens if you try to read a file that doesn’t exist on your computer?
// = QC 6.1 answer If you try to read a file that doesn’t exist on your computer, the fs module passes an
// error in its callback. How you handle that error is up to you. You can have it crash your application or
// simply log it to your console.

// Quick check 6.2 What should be your default response if a route isn’t found?
// = QC 6.2 answer If your application can’t find a route for some request, you should send back a 404
// HTTP status code with a message indicating the page that the client was looking for can’t be found. 

// Quick check 6.3 True or false: functions and objects that aren’t added to their module’s
// exports object are still accessible by other files.
// = QC 6.3 answer False. The exports object is intended to allow modules to share functions and
// objects. If an object isn’t added to a module’s exports object, it remains local to that module, as defined
// by CommonJS. 