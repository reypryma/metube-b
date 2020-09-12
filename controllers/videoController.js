import {videoList} from "../db";
import routes from "../routes";


export const home = (req, res) => {
    res.render("home", {pageTitle: 'Home', videoList});
};

export const videoSearch = (req, res) => {
    const {
        //same as request.query.term, it has new name searchingBy and its equal to query term
        query: {term: searchingBy}
    } = req
    //with babel/es6, searchingBy have value of searchingBy
    res.render("search", {pageTitle: 'Search', searchingBy, videoList});
    //res.render("search", {pageTitle: 'Search'});
    //All in all equivalent of
    //const searchingBy = req.query.term - render(..., searchingBy : searchingBy
};
/*export const videos = (req, res) => {
    res.render("Video", {pageTitle: 'Video'})
};*/

export const videoDetail = (req, res) => {
    res.render("videoDetail", {pageTitle: 'Video Detail'})
};

export const getUpload = (req, res) => {
    res.render("uploadVideo", {pageTitle: 'Upload'})
};
export const postUpload = (req, res) => {
    //res.render("uploadVideo", {pageTitle: 'Upload'})
    const {
        body: {
            file,
            videoTitle,
            videoDescription
        }
    } = req
    //TODO Upload video and save
    res.redirect(routes.videoDetail(323423))

};

export const editVideo = (req, res) => {
    res.render("editVideo", {pageTitle: 'Edit Video'})
};

export const deleteVideo = (req, res) => {
    res.render("deleteVideo", {pageTitle: 'Delete Video'})
};