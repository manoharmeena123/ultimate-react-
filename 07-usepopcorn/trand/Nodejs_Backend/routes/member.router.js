const express = require("express")
const memberRouter = express.Router()
const { MemberModel} = require("../models/member.model")

memberRouter.get("/get", async(req,res)=>{
    try {
          const data = await MemberModel.find()
    res.json(data)
        
    } catch (error) {
        res.json(error)
    }
  
})

//Search=========================================>


memberRouter.get("/search/:find", async (req, res) => {

    try {
        const {find} = req.params
        const data = await MemberModel.find({Title:{$regex:find, $options:'i'}});         
      res.json(data);
    } catch (error) {
        res.json({msg:"Data Not Found"});
        // console.log(error);
    }
 });
    

//POST=============================================>
memberRouter.post("/create",async(req,res)=>{
    const payload = req.body
    try {
        const data = new MemberModel(payload)
    await data.save()
    res.send("Data Posted Successfully")

    } catch (error) {
        console.log(error)
        res.send("error in Post")
    }
})
//PATCH=====================================================>
memberRouter.patch("/update/:Id" ,async(req,res)=>{
    const ID = req.params.Id
    // const userID = req.body.userID
    const payload = req.body
    const note = await MemberModel.findOne({_id:ID})
    try {
    
     const data = await MemberModel.findByIdAndUpdate({_id:ID},payload)
     res.send("Data Updated Successfully")
      
    } catch (error) {
        console.log(Error)
        res.send("error in patch")
    }
})

//DELETE====================================================>
memberRouter.delete("/delete/:Id" , async(req, res) => {
    const ID = req.params.Id
    // const userID = req.body.userId
    const note = await   MemberModel.findOne({_id:ID}) 
     await MemberModel.findByIdAndDelete({_id :ID})
     res.send({"msg" : "Deleted successfully"})
    
})



module.exports ={
    memberRouter
}