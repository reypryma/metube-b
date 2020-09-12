import mongoose from "mongoose";

//models is a schema its the shape

const videoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        required: "File URL is required"
    },
    title:{
        type: String,
        required: "Title is required"
    },
    description: String,
    views:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

//the name is Video with schema is videoSchema
const model = mongoose.model("Video", videoSchema)
export default model;
//Its connected but they dont understand there is model
//import model to init