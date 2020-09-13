import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    //    Comment Have relationship with video, this comment will be directed to that video,
    // the video will have comment id
    /*    video:{
            type: mongoose.Schema.Types.ObjectId,
            ref:  "Video" //Make sure have same name with schema
        }*/
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
