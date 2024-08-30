import { Router } from "express";
import  getAccountData  from "../controller/account/account.cjs";
//const {getAccountData} = require('../controller/account/account.js')
const accrouter = Router();


accrouter.route("/:accountAddr").get(async (req, res) =>{
    console.log('Reached in router')
    const accountAddr = req.params.accountAddr;
    //console.log(accountAddr);
    if(accountAddr){
        const data = await getAccountData(accountAddr)
        //console.log(data);
        if(data){
            console.log(data.handle)
            res.status(200).send(data)
        }else{
            res.status(400).send('Error occured')
        }
    }
});

export default accrouter