// Quick check 28.1 Why might you store a secret token in process.env.TOKEN?
// = You can store sensitive or secret data in process.env as environmental variables. These variables are normally stored on the server but don’t need to appear in the code. This practice makes it easier to change the token directly on the server (you don’t have to change the code each
// time), and it’s a more-secure convention.

// Quick check 28.2 What does randToken.generate(16) do?
// = This method generates a random 16-character alphanumeric token. 

// Quick check 28.3 Why do you pass the JWT in the header of the request?
// = You could pass the JWT in the body of the request, but because not all requests
// will be POST, the headers offer a more convenient place. 