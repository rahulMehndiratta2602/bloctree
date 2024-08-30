
import express from 'express';
import User from '../models/user.model.js';
import { generatePasskey } from '../utils/generatePasskey.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { walletAddress } = req.body;

    try {
        let user = await User.findOne({ walletAddress });

        if (user) {
            return res.status(400).json({ msg: 'User with this wallet address already exists' });
        }

        const passkey = generatePasskey(); // Generating a passkey for the user

        user = new User({
            walletAddress,
            passkey,
        });

        await user.save();

        res.status(201).json({ msg: 'User registered successfully', passkey, user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


router.post('/signin', async (req, res) => {
    const { walletAddress, passkey } = req.body;

    try {
        const user = await User.findOne({ walletAddress, passkey });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid wallet address or passkey' });
        }

        res.status(200).json({ msg: 'Login successful', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/save-wallet', async (req, res) => {
    const { walletAddress } = req.body;
    console.log(req.body);
    

    try {
        let user = await User.findOne({ walletAddress });

        if (user) {
            return res.status(400).json({ msg: 'User with this wallet address already exists' });
        }

        const passkey = generatePasskey(); // Generate a passkey

        user = new User({
            walletAddress,
            passkey, // Placeholder; adjust as needed
        });

        await user.save();

        res.status(201).json({ msg: 'Wallet and passkey saved successfully', passkey });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;
