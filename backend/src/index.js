import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: './env' });

//import transactionRouter from './routes/transaction.route.js'
import accrouter from './routes/account.route.js'
const app = express(); 

 app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//app.use("/getTransaction" , transactionRouter)
app.use("/account", accrouter)

 app.get('/', function (req, res) {  
    res.json({
        "name" : "dishant",
    }); 
});  


app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
  );