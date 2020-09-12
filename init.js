import app from "./app";
import "./db";
import dotenv from "dotenv";
//⬆️Import all without declaring
import "./models/Video";

const PORT = process.env.PORT || 4000

dotenv.config()
const handleListening = () => {
    console.log(`Server listening http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);