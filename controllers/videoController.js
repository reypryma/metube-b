export const home = (req, res) => {
 res.send("Home") ;
};

export const videoSearch = (req, res) => {
    res.send("Search") ;
};
export const videos = (req, res) => res.send("Video");
export const videoDetail = (req, res) => res.send("Video Detail");
export const upload = (req, res) => res.send("Upload Video");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");