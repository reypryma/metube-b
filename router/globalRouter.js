import express from "express";
import routes from "../routes";
import {home, videoSearch} from "../controllers/videoController";
import {getJoin, getLogin, logout, postJoin, postLogin} from "../controllers/userController";


//this will be for handle url
const globalRouter = express.Router()
//post(..,postName)
// noinspection JSCheckFunctionSignatures
globalRouter.post(routes.join, postJoin)
globalRouter.get(routes.join, getJoin)

globalRouter.get(routes.login, getLogin)
globalRouter.post(routes.login, postLogin)



// noinspection JSCheckFunctionSignatures
globalRouter.get(routes.home, home)
// noinspection JSCheckFunctionSignatures
globalRouter.get(routes.search, videoSearch)
globalRouter.get(routes.logout, logout)


export default globalRouter;
