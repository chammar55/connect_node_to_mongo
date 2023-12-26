// Basic API to fetch data from mongo 

const dbConnect=require('./mongodb');
const mongodb=require("mongodb")
const express=require('express');

const app=express(); //taking app out of express()

// This is important to use req.body
app.use(express.json()) // to req data in app.post() we use this 

app.get('/',async (req,resp)=>{
    const db=await dbConnect();
    const data= await db.find().toArray();
    console.log(data)
    resp.send(data)
})

app.post('/',async (req,resp)=>{
    let data=await dbConnect();
    let result=await data.insertOne(req.body)
    
    resp.send(result)
})


// we can also send data in api and use params to use them
app.put('/:name',async (req,resp)=>{
    let data= await dbConnect();
    // let result=data.updateOne({name:"note 8"},{$set:{price:100}}); //For updation of static data
    let result=data.updateOne({name:req.params.name},{$set:req.body}); //For updation of dynamic data coming from postman
    resp.send({result:"put method"})
})

app.delete('/:id',async (req,resp)=>{
    console.log(req.params.id)
    const data=await dbConnect();
    // To use the _id from mongodb we have to convert it into Objectid with mongodb libary.
    //we can see the data type of _id in mongodb compass
    const result= data.deleteOne({_id:new mongodb.ObjectId( req.params.id)}) 
    resp.send("Done")
})

app.listen(5000)