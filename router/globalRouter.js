import express from "express";
import routes from "../routes";
import {home, videoSearch} from "../controllers/videoController";
import {getJoin, login, logout, postJoin} from "../controllers/userController";


//this will be for handle url
const globalRouter = express.Router()
//post(..,postName)
globalRouter.post(routes.join, postJoin)
globalRouter.get(routes.join, getJoin)


// noinspection JSCheckFunctionSignatures
globalRouter.get(routes.home, home)
// noinspection JSCheckFunctionSignatures
globalRouter.get(routes.search, videoSearch)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout)


export default globalRouter;
