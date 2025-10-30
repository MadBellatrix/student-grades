import { log } from "console";
import mongoose from "mongoose";

const URL = process.env.MONGO_URL || "";
console.log({URL});

mongoose.connection.on('error', (error) => {
    console.log('DB after inital connection:', error);
});

const connectDB = async () => {
    try {
        const options: mongoose.ConnectOptions = {};
        if (process.env.DATABASE) {
            options.dbName = process.env.DATABASE;
        }
        await mongoose.connect(URL, options);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error('Connection error:', error)
    }
}

export default connectDB;