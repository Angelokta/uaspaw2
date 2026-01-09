const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            // ambil drivers di mongodb.com
            "mongodb+srv://angel:angel20@cluster0.bggimrh.mongodb.net/uaspaw2?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MongoDB connected.");
    } catch (error) {
        console.error("Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;
