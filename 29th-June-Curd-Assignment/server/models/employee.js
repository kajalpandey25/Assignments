import employeeModel from '../models/employee.js';

// Register a new employee
export const registerEmployee = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if an employee with the same email already exists
        const existingEmployee = await employeeModel.findOne({ email: email });
        if (existingEmployee) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // Create a new employee record
        const newEmployee = await employeeModel.create({ name, email, password });
        res.json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login an existing employee
export const loginUser = (req, res) => {
    const { email, password } = req.body;
    
    // Find the employee based on the provided email
    employeeModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json('No record existed'); // No user with the provided email
            }

            // Compare the provided password with the stored password
            if (user.password.trim() === password) {
                res.json('Success!'); // Password is correct
            } else {
                res.json('Incorrect password'); // Password is incorrect
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message }); // Internal server error
        });
};