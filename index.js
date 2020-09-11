//Babel convert
import express from "express";
// const express = require('express')
const app = express()

const PORT = 4000

app.get('/', (req,res) =>
    res.send('Im refreshing again')
)

app.get('/profile', function (req,res) {
    res.send('My Profile')
})

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log(`Server listening http://localhost:${PORT}`);
})
