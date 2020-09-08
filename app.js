//Babel convert
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

import {userRouter} from "./router";

// const express = require('express')
const app = express()

const betweenParam = (req, res, next) => {
    console.log('between')
    next();
}

// noinspection JSCheckFunctionSignatures
//app.use(betweenParam);
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(helmet())
app.use(morgan('dev'))

// noinspection JSCheckFunctionSignatures
app.get('/',(req,res) =>
    res.send('Im refreshing again')
)

app.get('/profile', function (req,res) {
    res.send('My Profile')
})

app.use('/user', userRouter)

export default app;