const express = require('express');
const app = express();
const cors = require("cors")
require("dotenv").config();
app.use(express.json());
const cookieParser =  require("cookie-parser");

app.use(cookieParser())
app.use(cors())
//Require========================================>
const { connection } = require('./confige/confige');
const {userRouter} = require("./routes/user.router");
const {memberRouter} = require("./routes/member.router")
const {authenticate} = require("./middlewares/authentication")

//Welcome=========================================>
app.get("/", (req,res)=>{
    res.json("Welcome To Imentus World !")
})



app.use("/user", userRouter)
// app.use(authenticate)
app.use("/member", memberRouter)
//Server =====================================================================>


app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("Connected...")
    } catch (error) {
        console.log("Error in Connection to mongoose...")
    }
    console.log(`Server in Running on ${process.env.port}`)
})




