//GLOBAL
const HOME = "/"
const JOIN = "/join"
const LOGIN = "/login"
const LOGOUT = "/logout"
const SEARCH = "/search"


//Users
const USERS = "/users"
const EDIT_PROFILE = "/edit-profile"
const USER_DETAIL = "/:id" //they think the value will change // UPDATE: beware /:id/ lead to error render!!
/// ⬆️Will be /users/1 etc
const CHANGE_PASSWORD = "/change-password"

//Videos
const VIDEOS = "/videos"
const UPLOAD = "/upload"
const VIDEO_DETAIL = "/:id"
const EDIT_VIDEO = "/:id/edit"
const DELETE_VIDEO = "/:id/delete"

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,

    users: USERS,
    userDetail:
        (id) => {
            if(!id){
                return USER_DETAIL
            }else{
                return `${USERS}/${id}`
            }
        },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if(!id)
            return VIDEO_DETAIL
        else
            return `${VIDEOS}/${id}`
    },
    editVideo: (id)=>{
        if(id){
            return `${VIDEOS}/${id}/edit`
        }else{
            return EDIT_VIDEO
        }
    },
    deleteVideo: (id)=>{
        if (id){
            return `${VIDEOS}/${id}/delete`
        }else {
            return DELETE_VIDEO
        }
    }
}

export default routes;