const jwt = require("jsonwebtoken");
const Users = require("../models/Users.model")


const validateToken = async(req,res, next )=>{
    if(!req.headers["authorization"]){
        return res.json({message: "debe incluir el token"})
    };

    const token = req.headers["authorization"];
    console.log(token);

    let data;
    try{
        const verifyToken = token.split(" ")[1]
        data = jwt.verify(verifyToken, process.env.SECRET_KEY_JWT);
    }catch(error){
        return res.json({message: "token incorrecto"})
    }

    const user = await Users.findById(data.user_id);

    if(!user){
        return res.json({message: "el usuario no existe"})
    }
    req.user = user;
    next();

};

const checkAdmin = (role) => {
    if(role !== 'admin'){
      return res.status(403).json({ msg: 'Debe ser Administrador para acceder a esta ruta' });
    }
    return true;
};


module.exports = {validateToken, checkAdmin};