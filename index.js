import express from "express";
import router from "./Route/job.route.js"
import mongoose from "mongoose";

const app=express();
app.use(express.json());
app.use( "/api/v1/job",router);

app.use(express.urlencoded());

mongoose.connect("mongodb+srv://priyesh88088:jAeYEXcz83r9fkx3@cluster0.bdrjv2g.mongodb.net/")
.then(()=>console.log("Db connected"))
.catch(err=>
    console.log("Error in Connecting",err)
);

const portno=8080;
console.log("hii");
app.listen(portno,()=>{
    console.log(`Server Up and running at port ${portno}`)
})
