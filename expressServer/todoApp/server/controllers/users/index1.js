import express from 'express';
import fs from 'fs/promises';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, mobileNumber, password, password2, address } = req.body;

        let fileData = await fs.readFile('data1.json');
        let registeredUsers = JSON.parse(fileData);

        const userExists = registeredUsers.some((element) => element.email === email);
        if (userExists) {
            return res.status(409).json({ error: 'Email already registered. Please login.' });
        }

        const newUser = {
            firstName,
            lastName,
            email,
            password,
            password2,
            mobileNumber,
            address
        };
        registeredUsers.push(newUser);

        await fs.writeFile('data1.json', JSON.stringify(registeredUsers));

        return res.status(200).json({ success: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;