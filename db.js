import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(
    process.env.MONGO_URL,
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