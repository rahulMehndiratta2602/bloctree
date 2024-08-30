import dotenv from 'dotenv';

dotenv.config({ path: './env' });

import solanaWeb3 from "@solana/web3.js";

const { PublicKey, Connection } = solanaWeb3;

const connection = new Connection(process.env.QUICKNODE_API);

const getTransactions = async (req, res) => {
    try {
        const { userAddress, numTx } = req.body;
        const searchAddress = new PublicKey(userAddress);

        let transactionList = await connection.getSignaturesForAddress(searchAddress, { limit: numTx });

        const formattedTransactions = transactionList.map((transaction, i) => {
            const date = new Date(transaction.blockTime * 1000);
            return {
                transactionNumber: i + 1,
                signature: transaction.signature,
                time: date.toISOString(),
                status: transaction.confirmationStatus,
            };
        });

        console.log(formattedTransactions);

        res.status(200).json(formattedTransactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: "Failed to fetch transactions" });
    }
};

export { getTransactions };
