const express = require('express');
const mongoose = require('mongoose');

const app = express();

const registerRoutes = require("./routes/register");
const signinRoutes = require("./routes/signin");

mongoose
  .connect("mongodb+srv://root:mongo9597DB@cluster0.nsz5wgf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use('/',registerRoutes);
app.use('/',signinRoutes);

app.listen(3000,()=>{
    console.log("Server is up at port 3000");
})