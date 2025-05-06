// Quick check 20.1 Why do you use the PUT method for the edit form and POST for the new form?
// = The edit form is updating data for an existing record. By convention, the request to
// submit data to your server should use an HTTP PUT method. To create new records, use POST. 

// Quick check 20.2 True or false: findByIdAndUpdate is a Mongoose method.
// = True. findByIdAndUpdate is a Mongoose method used to make your query more
// succinct and readable in your server’s code. The method can’t be used unless the Mongoose package is
// installed. 

// Quick check 20.3 Why is ?_method=DELETE needed at the end of your link’s path?
// = method-override looks for the _method query parameter and its mapped
// method. Because you’re using this package to filter incoming GET and POST requests as alternative
// methods, you need to append this parameter and value. 