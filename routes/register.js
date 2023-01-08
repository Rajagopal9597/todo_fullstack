const Router = require("express").Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const Users = require("../models/user");


Router.use(bodyParser());

Router.post("/register", async (req, res) => {
    try {
        const { userName, password } = req.body;
        const fetchedUser = await UserTodo.find({ userName: userName });
        // console.log(fetchedUser);
        if (!(fetchedUser.length === 0)) {
            // console.log("in if cond");
            return res.status(400).json({
                status: "failed",
                message: "userName already exists"
            })
        }
        else{
            bcrypt.hash(password,10,async function(err,hash){
                if(err){
                    return res.status(400).json({
                        status : "failed",
                        message : "invalid details"
                    })
                }
                const user = await UserTodo.create({
                    userName: userName,
                    password : hash
                })
                return res.status(200).json({
                    status: "Success",
                    user : user
                })
            })
        }
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})


module.exports = Router;
