// For inserting data into database
const dbConnect=require('./mongodb');

const insert=async ()=>{
    const db=await dbConnect();
    // const result=await db.insertOne( // for single item
    //     {name:"note 5",brand:"vivo",price:320,category:"mobile"}
    //     );
    const result=await db.insertMany([ // for multiple item
        {name:"note 6",brand:"vivo",price:220,category:"mobile"},
        {name:"note 7",brand:"vivo",price:320,category:"mobile"},
        {name:"note 8",brand:"vivo",price:420,category:"mobile"},
]);
    if(result.acknowledged){
        console.log("data inserted")
    }
}

insert();