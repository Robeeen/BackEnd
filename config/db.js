import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://itszltd:$Winter_2024@cluster0.fhetg.mongodb.net/food-del').then(()=>console.log("Db Connected now!"));
}