
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        unique: true,  // Ensures that wallet addresses are unique
    },
    passkey: {
        type: String,
    }
});

const User = mongoose.model('User', UserSchema);

export default User;
