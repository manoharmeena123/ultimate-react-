const express = require("express");
const { Router } = require("express");
const { UserModel } = require("../models/user.models");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { model } = require("mongoose");
const { resourceLimits } = require("worker_threads");
userRouter.use(express.json());
const cookieParser = require("cookie-parser")
userRouter.use(cookieParser())

//Registerd==============================================================>
userRouter.post("/sign", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    res.json("User Already Exist..!");
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        const users = new UserModel({ email, password: hash });
        await users.save();
        res.json({"msg":"User Successfully Registered...!"});
      });
    } catch (error) {
      console.log(error);
      res.json({"msg" :" Something wrong Crediential..."});
    }
  }
});

//Login==================================================================>

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  try {
    const hash_pass = user.password;
    bcrypt.compare(password, hash_pass, async (err, result) => {
      if (result) {
        const token = jwt.sign({ userId: user._id }, "masai", {
          expiresIn: "15min",
        });
        const refreshtoken = jwt.sign({ userId: user._id }, "masai", {
          expiresIn: "30min",
        });

        res.cookie("token",token,{httpOnly:true,maxAge:1000000}).cookie("refreshtoken",refreshtoken,{httpOnly:true,maxAge:1000000})
        res.json({
          msg: "Login Successfully",
          token: token,
          refreshtoken: refreshtoken,
        });
      } else {
        res.json({
          msg: "Credential are not Correct...!",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.json(" Logging failed...!");
  }
});

module.exports = {
  userRouter,
};
