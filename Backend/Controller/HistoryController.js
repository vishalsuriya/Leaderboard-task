const History = require('../Models/UserHistory');

const getHistory = async(req,res)=>{
    try{
     const {userId} = req.params;
     const history = await History.find({userId}).sort({claimedAt: -1});
     res.status(200).json(history);
    }catch(error){
        res.status(500).json({message : error.message});
    }
}

module.exports = {getHistory};