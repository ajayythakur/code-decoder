const express = require("express");
const app = express();
const connect = require("./config/db");
const { userSchema } = require("./model/model");
const route = require("./routes/router");

app.use(express.json());
app.use(route);

 
app.get("/",(req,res) => {
    res.send("Hello");
})

app.listen(8080, async()=>{
    try {
        await connect();
        console.log("Conneced to Database");
    } catch (error) {
        console.log("Error in Connection",error);
    }
    console.log("Server Started at Port 8080");

})

