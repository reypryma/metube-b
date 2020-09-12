import mongoose from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017/metube-b",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //useFindAndModify: false
    }
)


const db = mongoose.connection;

const handleOpen = () => console.log("Connected to Db")
const handleError = (error) => {
 console.log(error);
};

//only happen 1, open connection
db.once("open", handleOpen)
db.on("error", handleError)