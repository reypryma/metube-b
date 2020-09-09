//Babel convert
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

import {userRouter} from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import globalRouter from "./router/globalRouter";
import routes from "./routes";

// const express = require('express')
const app = express()
// noinspection JSCheckFunctionSignatures
//app.use(betweenParam);
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(helmet())
app.use(morgan('dev'))

// noinspection JSCheckFunctionSignatures
app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)

export default app;