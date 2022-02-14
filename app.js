const express =require("express");
 //require("./conn")
 const Student =require("./students")
const mongoose= require("mongoose")
const config =require("./config");
const app= express();
const port =process.env.PORT || 3000;
app.use(express.json());

// app.get("/",(req,res) => {
//     res.send("get is used just to read");
//})
app.post("/students",(req,res) =>{
  console.log(req.body)
  const user = new Student(req.body)
   res.send("hello from the other side.")
 })   
    
    app.listen(port,()=> {
      console.log(`connection is set up at port ${port}`)
})
mongoose.connect(config.dbconstr)
.then(res => {console.log("connected to mongodb")})
    .catch(err =>{console.log("failed to conect to database")})