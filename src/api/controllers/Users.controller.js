const bcrypt = require("bcryptjs");
const {createToken}= require("../../utils/jwt")
const Users = require("../models/Users.model");

//REGISTER Y LOGIN//
const register = async(req,res)=>{
    try{
        const newUser = req.body;
        const userDB = await Users.find({username: newUser.username});
        if(userDB.length !== 0){
            return res.status(400).json({message: "usuario ya esta registrado"})
        };

        newUser.password = await bcrypt.hash(newUser.password, 10);
        const user = await Users.create(newUser);

        return res.status(201).json(user)

    }catch(error){
        res.status(500).json({msg:"error en el servidor"});
    }
}

const login = async(req,res)=>{
    try{
        const {username, password} = req.body;
        const userDB= await Users.findOne({username});
        if(!userDB){
            return res.json({message: "usuario no registrado"})
        };
        const same = await bcrypt.compare(password, userDB.password);
        if(!same){
            return res.status(404).json({message: "contraseña incorrecta"})
        };
        return res.status(200).json({message:"usuario y contraseña correctos",token: createToken(userDB)})

    }catch(error){
        res.status(500).json({msg:"error en el servidor"});

    }
}

//PROFILE//

const profile = async(req, res)=>{
    try{
        const dataUser = await Users.findOne({username: req.user.username});
        return res.status(200).json(dataUser)
    }catch(error){
        res.status(500).json({msg:"error en el servidor"});
    }

}


module.exports= {register, login, profile}