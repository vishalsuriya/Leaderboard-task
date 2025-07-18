const User = require('../Models/User');
const History = require('../Models/UserHistory');
const getUsers = async (req,res)=>{
    try{
        const users  = await User.find().sort({totalPoints: -1});
        const rankedUsers = users.map((user, index) => ({
             _id: user._id,
              name: user.name,
              totalPoints: user.totalPoints,
             rank: index + 1,
           }));
           res.status(200).json(rankedUsers);
    }catch(err){
        res.status(500).json({message : "Error fetching users", error : err.message});
    }
}

const addUser = async(req,res)=>{
    try{
        const {name} = req.body;
        if(!name){
            return res.status(400).json({message: "Name is required"});
        }
        const existingUser = await User.findOne({ name});
        if(existingUser){
            return res.status(400).json({message : "user already exists"});
        }
        const newUser = new User({name});
        await newUser.save();
        res.status(201).json({message: "user added successfully",user: newUser});
    }catch(err){
        res.status(500).json({message: "Error adding user",error : err.message});
    }
}
const claimPoints = async (req,res)=>{
    try{
        const {userId} = req.params;
        const points = Math.floor(Math.random()*10)+1;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message : "User not found"});
        }
        user.totalPoints+= points;
    await user.save();
     const history = new History({
      userId: user._id,
      pointsClaimed : points
    })
    await history.save();
    res.status(200).json({message: "Points claimed succesfully",points,updatedUser : user})
    }catch(err){
        res.status(500).json({message: "Error claiming points",error : err.message});
    }
}


module.exports = {getUsers,addUser,claimPoints};