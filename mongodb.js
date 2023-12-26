const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017"; //path to tell database from where we want to fetch data
const database='node-course' // name of our database 
const client=new MongoClient(url);

async function dbConnect(){
    let result=await client.connect();
   let db= result.db(database);
   return db.collection('products') // collection in our databse
   
}

module.exports=dbConnect;