import mongoose from 'mongoose';

// Function to connect to the MongoDB database
const connectToDb = async () => {
    try {
        // Attempt to connect to the MongoDB database using the provided URI
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,         // Use new URL parser
            useUnifiedTopology: true,     // Use new server discovery and monitoring engine
        });
        console.log('Connected to MongoDB'); // Log a success message if the connection is established
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message); // Log an error message if the connection fails
        process.exit(1); // Exit the process with a non-zero code to indicate an error
    }
};
module.exports = connectToDb;