const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const Users = require("../models/user");
SECRET = "RESTAPI"

Router.use(bodyParser());

Router.post('/login',async (req,res)=>{
    try{
        let user = await Users.find({userName : req.body.userName});
        if(user.length===0){
            return res.status(400).json({
                status:"failed",
                message: "user did not exist please register"
            })
        }

        bcrypt.compare(req.body.password,user[0].password).then(
            function(result){
                if(result){
                    var token = jwt.sign({
                        data : user._id
                    },SECRET,{expiresIn:'7d'})

                    return res.status(200).json({
                        status : "Success",
                        Token : token,
                        User: user
                    })
                }else{
                    return res.status(400).json({
                        status:"failed",
                        message:"not authenticated"
                    })
                }
                
            }
        )

    }catch(e){
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

module.exports = Router
