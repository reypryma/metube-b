import express from 'express';
import routes from "../routes";
import {changePassword, editProfile, userDetail} from "../controllers/userController";

export const userRouter = express.Router()

//for now so that users/edit-profile can be rendered, I change the position
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePassword, changePassword)
// noinspection JSCheckFunctionSignatures
userRouter.get(routes.userDetail(), userDetail)

