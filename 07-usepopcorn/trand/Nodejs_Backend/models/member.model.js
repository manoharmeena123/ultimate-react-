const mongoose = require("mongoose")

const memberSchema = mongoose.Schema({
  Title: String,
  Year: Number,
  Runtime: String,
  Poster:String,
  Type : String
})

const MemberModel = mongoose.model("member", memberSchema)

module.exports = {
  MemberModel
}