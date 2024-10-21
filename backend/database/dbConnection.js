import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: './config.env' });

export const dbConnection = () => {
    const mongoURI = process.env.MONGO_URI;

    mongoose.connect(mongoURI, {
        dbName: "MERN_STACK_JOB_SEEKING",
    })
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
};
