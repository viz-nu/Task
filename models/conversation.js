import mongoose from "mongoose";
const waSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    conversation: [
        {
            message: {
                type: String,
                required: true
            },
        }
    ],
});
const waModel = mongoose.model("WA", waSchema, "wa");
export default waModel;
