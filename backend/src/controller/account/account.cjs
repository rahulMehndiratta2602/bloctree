const Account = require('arweave-account').default;

const account = new Account()

async function getAccountData(accountAddr){
    try{
        const accData = await account.get(accountAddr);
        //console.log(accData);
        return accData;
    }
    catch(e){
        console.log(`Error occured ${e}`);
        
    }
}

module.exports = getAccountData 