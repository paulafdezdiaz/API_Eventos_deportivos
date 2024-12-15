const express = require("express");
require("dotenv").config();
const connectDB = require("./src/utils/db_mongo");
const route = require("./src/api/routers/routers");
connectDB();

const server = express()
server.use(express.json())

const PORT = process.env.PORT

server.use("/", route);

server.listen(PORT, ()=>{
    console.log(`Servidor ejecutando en http://localhost:${PORT}`)
})

