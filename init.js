import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config()
//⬆️Import all without declaring
import "./models/Video";
import "./models/Comment"
const PORT = process.env.PORT || 4000


const handleListening = () => {
    console.log(`Server listening http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);