import app from "./app";
import "./db";


const PORT = 4000

const handleListening = () => {
    console.log(`Server listening http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);