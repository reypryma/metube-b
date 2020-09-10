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
import {localMiddleWare} from "./middlewares";
// const express = require('express')
const app = express();
//extensen pug of layout inside view
app.set("view engine", "pug");

// noinspection JSCheckFunctionSignatures
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())         // check what content that send
app.use(bodyParser.urlencoded({extended : true}))
app.use(morgan('dev'))

//Middle get data from local var then do next to routing
app.use(localMiddleWare);

// noinspection JSCheckFunctionSignatures
app.use(routes.home, globalRouter)
// users/your-user-router
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)

export default app;