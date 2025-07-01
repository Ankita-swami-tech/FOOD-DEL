import mongoose from "mongoose";


 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ankitathimau2006:ankuvikku@cluster0.73aapqa.mongodb.net/food-del').then(()=>console.log("DB Connected"));

 }