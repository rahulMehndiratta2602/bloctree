import { Router } from 'express';
import { getTransactions } from '../controller/transactions.js';

const router = Router();

router.route("/transactions").post(getTransactions);

export default router