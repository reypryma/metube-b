import routes from "../routes";
import Video from "../models/Video"

//async will finish first statement before go next, example, downloading video, javascript will wait till
//video fully downloaded first
export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({_id : -1}) //sort to newest first
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

export const videoDetail = async (req, res) => {
    const {
        params : {id}
    } = req
    try {
        const video = await Video.findById(id)
        res.render("videoDetail", {pageTitle: video.title, video})
    } catch (e) {
        console.log(e)
        res.redirect("home")
    }
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

    //Upload video and save
    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id))

    //res.render("upload", {pageTitle: "upload"})

};

export const getEditVideo = async (req, res) =>  {
    const {
        params:{id}
    }=req

    try {
        const video = await Video.findById(id)
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video})
    } catch (e) {
        res.redirect(routes.home)
    }
}

export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body:{title, description}
    } = req
    try {
        await Video.findOneAndUpdate({_id: id},{title,description})
        res.redirect(routes.videoDetail(id));
    } catch (e) {
        res.redirect("home")
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: {id}
    } = req
    try {
        await Video.findOneAndRemove({_id: id})
        res.redirect(routes.home)
    } catch (e) {
        console.log(e)
        res.redirect(routes.home)
    }
};