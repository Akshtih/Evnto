import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://akshithnarra2006:1234@cluster0.iezx2.mongodb.net/event-management').then(()=>console.log("DB connected"))
}