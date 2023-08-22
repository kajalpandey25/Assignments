import express from 'express';
import { registerEmployee, loginUser } from '../controller/controller.js';

// Create an instance of an Express Router
const router = express.Router();

// Define a route for registering a new employee
router.post('/register', registerEmployee);

// Define a route for logging in an employee
router.post('/login', loginUser);

// Export the router instance to be used by other parts of the application
export default router;