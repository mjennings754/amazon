import mongoose, { mongo } from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB successfully connected")
    } catch (error) {
        console.error("Error connecting to mongoDB: ", error)
        process.exit(1)
    }
}