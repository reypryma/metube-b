import routes from "../routes";
import Video from "../models/Video"

//async will finish first statement before go next, example, downloading video, javascript will wait till
//video fully downloaded first
export const home = async (req, res) => {
    try {
        const videos = await Video.find({})
        res.render("home", {pageTitle: 'Home', videos});
    } catch (e) {
        console.log(e)
        res.redirect("home", {pageTitle: "Home", videos: []})
    }
};

export const videoSearch = async (req, res) => {
    const {
        //same as request.query.term, it has new name searchingBy and its equal to query term
        query: {term: searchingBy}
    } = req
    const videos = await Video.find({})
    //with babel/es6, searchingBy have value of searchingBy
    res.render("search", {pageTitle: 'Search', searchingBy, videos});
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
export const postUpload = async (req, res) => {
    //res.render("uploadVideo", {pageTitle: 'Upload'})
    const {
        body: {title, description},
        file: {path}
            /*: {
            videoFile,
            videoTitle,
            videoDescription
        }*/
    } = req
    /// we try to access on url way
    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description,
    })

    //TODO Upload video and save
    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id))

    //res.render("upload", {pageTitle: "upload"})

};

export const editVideo = (req, res) => {
    res.render("editVideo", {pageTitle: 'Edit Video'})
};

export const deleteVideo = (req, res) => {
    res.render("deleteVideo", {pageTitle: 'Delete Video'})
};