const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
    activity : {type : String,required: true},
    status: {type: String, default : "Pending"},
    timeTaken : {type: Number, default: 0},
    user : {type: mongoose.Types.ObjectId, ref: "User"}
})

const Todo = mongoose.model("Todo",todosSchema);

module.exports = Todo;