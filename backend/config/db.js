import mongoose from "mongoose";


 export const connectDB = async () =>{
    await mongoose.connect('YOUR_MONGO_PASSWORD').then(()=>console.log("DB Connected"));

 }