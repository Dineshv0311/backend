import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.conneect(`${process.env.MONGO_URL}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection failed",error);
        process.exit(1);

    }
}
export default connectDB;