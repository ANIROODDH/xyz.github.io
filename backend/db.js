
const mongoose =require('mongoose')
 

  const url = "mongodb://gofood:Ani052003@ac-uux1ybs-shard-00-00.nylcfat.mongodb.net:27017,ac-uux1ybs-shard-00-01.nylcfat.mongodb.net:27017,ac-uux1ybs-shard-00-02.nylcfat.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-voaca9-shard-0&authSource=admin&retryWrites=true&w=majority";
 
  const connectDB = async()=>{
    await  mongoose.connect(url ,{  useNewUrlParser :true},async(err ,res)=>{
    if(err)
    console.Console.log("--",err)
  else{
        console.log('connected to mongo');
        const fetched_data= await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray( async function(err,data) {
          const foodCategory= await mongoose.connection.db.collection("food_Category");
          foodCategory.find({}).toArray(function(err,catdata) {
            if(err) console.log(err);
            else {
              global.food_items =data;
              global.foodCategory =catdata;
            }
          })
        })
    }
    })
}
module.exports = connectDB();