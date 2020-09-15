import express from "express";
import routes from "../routes";
import {
    deleteVideo,
    getEditVideo,
    getUpload,
    postEditVideo,
    postUpload,
    videoDetail
} from "../controllers/videoController";
import {uploadVideoMulter} from "../middlewares";

export const videoRouter = express.Router()

/*Upload*/
videoRouter.get(routes.upload, getUpload)
videoRouter.post(routes.upload, uploadVideoMulter, postUpload)

/*Video Detail*/
videoRouter.get(routes.videoDetail(), videoDetail)

/*Edit  Video*/
// videoRouter.get(routes.editVideo, editVideo) //routes.editVideo become function
videoRouter.get(routes.editVideo(), getEditVideo)
videoRouter.post(routes.editVideo(), postEditVideo)

/*Delete Video*/
videoRouter.get(routes.deleteVideo(), deleteVideo)

export default videoRouter;
