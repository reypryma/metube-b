import app from "./app";

const PORT = 83

const handleListening = () => {
    console.log(`Server listening http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);