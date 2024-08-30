import solanaWeb3 from '@solana/web3.js';
import User from '../models/user.model.js'; // Import your User model

const { PublicKey, Connection } = solanaWeb3;
const connection = new Connection("https://clean-dry-shadow.solana-devnet.quiknode.pro/3d7f54dbafc2b87560db9331651182e864ceb921");

const getTransactions = async (req, res) => {
    try {
        // Get the user ID from the request (assuming user ID is passed in the request body)
        const { walletAddress } = req.body;

        // Find the user in the database using the user ID
        const user = await User.findById(walletAddress);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Extract the wallet address from the user's data
        const searchAddress = new PublicKey(user.walletAddress);

        // Fetch the last 10 transactions for the user's wallet address
        let transactionList = await connection.getSignaturesForAddress(searchAddress, { limit: 10 });

        // Format the transactions into JSON format
        const formattedTransactions = transactionList.map((transaction, i) => {
            const date = new Date(transaction.blockTime * 1000);
            return {
                transactionNumber: i + 1,
                signature: transaction.signature,
                time: date.toISOString(),
                status: transaction.confirmationStatus,
            };
        });

        // Send the formatted transactions as a JSON response
        res.status(200).json(formattedTransactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: "Failed to fetch transactions" });
    }
};

export default getTransactions;
