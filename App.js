const mongoose =  require ("mongoose");
const fs = require("fs");

mongoose.connect("mongodb://localhost:27017/tollplazaMS" , 
{useNewUrlParser:true , useUnifiedTopology:true})
.then( ()=> console.log("connection successful..."))
.catch((err) => console.log(err));

// // collection creation

const datarecordSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required:true
    },
    LOCATION: {
        type:String,
        required:true,
        uppercase:true
    },
    TOLL_NO: {
        type: Number,
        required:true
    },
    LANE_NO: {
        type:String,
        required:true,
        uppercase:true
    },
    VEHICLE_NO: {
        type:String,
        required:true,
        uppercase:true
    },
    VEHICLE_TYPE:{
        type:String,
        required:true,
        uppercase:true
    },
    VEHICLE_SUB_TYPE:{
        type:String,
        required:true,
        uppercase:true
    },
    ENTRY_TIME:{
        type: Date,
        required:true
     },
    IMAGE:{
        type:Buffer,
        required:true
    },
    VIDEO_CLIP:{
        type:Buffer,
        required:true
    },
    EXEMPTED:{
        type:String,
        required:true,
        uppercase:true
    },
    MONTHLY_PASS: {
        type:String,
        required:true,
        uppercase:true
    },
    CVR_WITHOUT_DTP:{
        type:String,
        required:true,
        uppercase:true
    },
   FEE: {
        type: String,
        required: true,
        uppercase:true
    },
    IN_OUT:{
        type:String,
        required:true,
        uppercase:true
    }
})

// // collection creation

const DataRecord = new mongoose.model("DataRecord",datarecordSchema);

//create document or insert document

const updateDocument = async () => {
    try{
       const reactDataRecord = new DataRecord({
        ID: 4,
        LOCATION: "kanpur",
        TOLL_NO: 5,
        LANE_NO: 3,
        VEHICLE_NO: "mh14cc1234",
        VEHICLE_TYPE:"truck",
        VEHICLE_SUB_TYPE:"truck",
        ENTRY_TIME: "2023-08-03",
        MONTHLY_PASS:"yes",
        IMAGE: fs.readFileSync(`/tollplaza/src/logo.svg`),
        VIDEO_CLIP: fs.readFileSync(`/tollplaza/src/swami.jpg`),
        EXEMPTED:"yes",
        CVR_WITHOUT_DTP:"no",
        FEE: 100,
        IN_OUT: "in"
        
     })

const result = await reactDataRecord.save();
console.log(result);
    }catch(err){
        console.log(err)
    }
}
updateDocument();



// image upload

// const mongoose = require('mongoose');
// const fs = require('fs');

// mongoose.connect(
//     'mongodb://localhost:27017/myapp',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

// User Model
// const User = mongoose.model(
//     'User',
//     new mongoose.Schema({
//         username: {
//             type: String,
//             required: true
//         },
//         avatar: {
//             type: Buffer, // casted to MongoDB's BSON type: binData
//             required: true
//         }
//     }));


// const userData = {
//     username: 'swami',
//     avatar: fs.readFileSync(`logo.svg`),
// }

// const user = new User(userData);
// user.save()
//     .then(() => console.log('User Saved Successfully!'))
//     .then(() => mongoose.connection.close(() => console.log('Connection Closed successfully!')))
//     .catch((err) => console.log(`Error in Saving User: ${err}`));