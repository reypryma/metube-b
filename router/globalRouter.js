import express from "express";
import routes from "../routes";
import {home, videoSearch} from "../controllers/videoController";
import {join, login, logout} from "../controllers/userController";


//this will be for handle url
const globalRouter = express.Router()

// noinspection JSCheckFunctionSignatures
globalRouter.get(routes.home, home)
// noinspection JSCheckFunctionSignatures
globalRouter.get(routes.search, videoSearch)
globalRouter.get(routes.join, join)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout)



export default globalRouter;
