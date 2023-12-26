// const {MongoClient}=require("mongodb");
// const url="mongodb://localhost:27017"; //path to tell database from where we want to fetch data
// const database='node-course' // name of our database 
// const client=new MongoClient(url);

// async function getData(){
//     let result=await client.connect();
//    let db= result.db(database);
//    let collection=db.collection('products') // collection in our databse
//    // we are dealing with the promise
//    let response=await collection.find({}).toArray(); // fint() => it will find that collection and toArray() will make it readable.
//    console.log(response) 
// }

// getData(); 