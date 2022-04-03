const express =require("express");
 
 const Student =require("./students")
const mongoose= require("mongoose")
const config =require("./config");
const Repository=require('./Repository')
const app= express();
const port =process.env.PORT || 3000;
app.use(express.json());

app.get("/",(req,res) => {
    res.send("get is used just to read");
})
app.post("/students",(req,res) =>{
  console.log(req.body)
  const user = new Student(req.body)
  user.save().then(() =>{
   res.status(201).send(user); 
  }).catch((e)=>{
    res.status(400).send(e);
  })
   
 })  
 app.get 
    
    app.listen(port,()=> {
      console.log(`connection is set up at port ${port}`)
})
mongoose.connect(config.dbconstr)
.then(res => {console.log("connected to mongodb")})
    .catch(err =>{console.log("failed to conect to database")})

    

    