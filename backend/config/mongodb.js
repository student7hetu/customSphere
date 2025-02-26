import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No extra options needed

        console.log("DB Connected");

        mongoose.connection.on("error", (err) => {
            console.error("MongoDB Connection Error:", err);
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
