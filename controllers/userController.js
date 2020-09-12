// export const join   = (req, res) => {
//     res.render("join", {pageTitle: 'Join'})
// }

//this to get data from join also render join template
import routes from "../routes";

export const postJoin   = (req, res) => {
    //console.log(req.body)
    const {
        body: {
            name, email, password, passwordVerify
        }
    }=req;
    if (password !== passwordVerify){
        res.status(400)
        res.render("join", {pageTitle: 'Join'})
    }else {
        res.redirect(routes.home)
    }
}

export const getJoin   = (req, res) => {
    res.render("join", {pageTitle: 'Join'})
}

export const getLogin  = (req, res) => res.render("login", {pageTitle: 'Login'})
export const postLogin  = (req, res) => {
    res.redirect(routes.home)
}

export const logout = (req, res) => res.render({pageTitle: 'Log out'})
export const editProfile = (req, res) => res.render("editProfile",  {pageTitle: 'Edit Profile'})
export const userDetail = (req, res) => res.render("userDetail",  {pageTitle: 'Detail User'})
export const changePassword = (req, res) => res.render("changePassword",  {pageTitle: 'Change Password'})
