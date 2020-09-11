export const home = (req, res) => {
    res.render("home", {pageTitle: 'Home'});
};

export const videoSearch = (req, res) => {
    const {
        //same as request.query.term, it has new name searchingBy and its equal to query term
        query: {term: searchingBy}
    } = req
    //with babel/es6, searchingBy have value of searchingBy
    res.render("search", {pageTitle : 'Search', searchingBy}) ;
    //res.render("search", {pageTitle: 'Search'});
    //All in all equivalent of
    //const searchingBy = req.query.term - render(..., searchingBy : searchingBy
};
export const videos = (req, res) => {
    res.render("Video", {pageTitle: 'Video'})
};

export const videoDetail = (req, res) => {
    res.render("videoDetail", {pageTitle: 'Video Detail'})
};

export const upload = (req, res) => {
    res.render("uploadVideo", {pageTitle: 'Upload'})
};

export const editVideo = (req, res) => {
    res.render("editVideo", {pageTitle: 'Edit Video'})
};

export const deleteVideo = (req, res) => {
    res.render("deleteVideo", {pageTitle: 'Delete Video'})
};