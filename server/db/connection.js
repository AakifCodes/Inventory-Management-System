import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection Successfull");
        
    } catch (error) {
        console.error("Connection Failed: ", error.message)
    }
}

export default connectDB