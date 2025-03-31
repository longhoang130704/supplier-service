import mongoose from "mongoose";

export const connectMongoDBCloud = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL_CONNECT)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`MongoDB Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}