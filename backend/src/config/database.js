import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection failed",error);
        process.exit(1);
        //note: everytime we need to connect the ip address in mongodb atlas network access 

    }
}
export default connectDB;