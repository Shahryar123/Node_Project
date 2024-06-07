const asyncHandler = require("express-async-handler")
const User = require("../Models/userModels")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

    const registerUsers = asyncHandler(async (req,res) => {
    
    const {name , email , password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("User already exists")
    }

    //NOW CREATE USER IN DATABASE
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    console.log(`User Created : ${user}`)
    if(user){
        res.status(201).json({
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400) 
        throw new Error("Invalid user data")    
    }
    res.json({message:"User Registered Successfully"});

})
const loginUsers = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.status(401);
        throw new Error("Email or Password is not valid");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (user && checkPassword) {
        const accessToken = jwt.sign(
            {
                user: {
                    name: user.name,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        );

        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or Password is not valid");
    }
});


const currentUsers = asyncHandler(async (req,res) => {
    res.json({message: "Current User"});
})
module.exports = {registerUsers , loginUsers , currentUsers}