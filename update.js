const dbConnect=require('./mongodb');

const updateData=async ()=>{
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:"note 6"},{$set:{name:"note 11",price:200}}
    )
    console.log(result)
}

updateData();