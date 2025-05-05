const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create a model
const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

// Save the user to the database
newUser.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error saving user:', err));