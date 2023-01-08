const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName : {type:String,required:true,unique:true},
    password : {type:String,required:true}
})

const UserTodo = mongoose.model("User",userSchema);

module.exports=UserTodo
