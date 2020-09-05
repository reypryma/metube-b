const express = require('express')
const app = express()

const PORT = 4000

app.get('/', function (req,res){
    res.send('hello world')
})

app.get('/profile', function (req,res) {
    res.send('My Profile')
})

function handleListening(){
    console.log(`http://localhost:${PORT}`)
}

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log(`Server listening http://localhost:${PORT}`);
})
