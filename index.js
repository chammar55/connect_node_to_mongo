const dbConnect=require("./mongodb");

//   console.log(dbConnect()) // its giving us promise we have to solve it


// ********************************** 1nd method modern and easy way ******************************************************************

const main=async ()=>{
let data=await dbConnect();
data=await data.find().toArray();
console.log(data)
}

main();


// ********************************** 2st method ******************************************************************
//  Remember: dbconect in async so its also give promise that we handle below. 1st then() is doing that.
// dbConnect().then((resp)=>{
//     //  Remember: toArray() also return promise that we have to handle, 2nd then() is doing that
//     resp.find().toArray().then((data)=>{
//     // resp.find({name:"M 40"}).toArray().then((data)=>{ // to find only one items
//         console.log(data)
//     })
// })