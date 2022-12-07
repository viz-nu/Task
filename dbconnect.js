import mongoose from "mongoose";
import config from "config";
async function dbConnect() {
    try {
        await mongoose.connect(dburl);
        console.log(`Mongo Connected`);
    } catch (error) {
        console.error(error);
    }
}

dbConnect();