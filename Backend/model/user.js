const mongoose=require('mongoose')

const userScmema=mongoose.Schema({
    name:String,
    email:String,
    course:String,
})

module.exports = mongoose.model("User",userScmema)