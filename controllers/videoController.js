export const home = (req, res) => {
 res.render("home") ;
};

export const videoSearch = (req, res) => {
    res.render("search") ;
};
export const videos = (req, res) => res.render("Video");
export const videoDetail = (req, res) => res.render("videoDetail");
export const upload = (req, res) => res.render("uploadVideo");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");