const dbConnect=require("./mongodb");

const deleteData=async ()=>{
    let data=await dbConnect();
    let result=await data.deleteMany({name:"note 6"}) //delete one items 'deleteOne" and "deleteMany" for multiple
    if(result.acknowledged){
        console.log("resord deleted")
    }
    console.log(result)
}

deleteData();