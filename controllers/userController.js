// export const join   = (req, res) => {
//     res.render("join", {pageTitle: 'Join'})
// }

//this to get data from join also render join template
export const postJoin   = (req, res) => {
    console.log(req.body)
    res.render("join", {pageTitle: 'Join'})
}

export const getJoin   = (req, res) => {
    res.render("join", {pageTitle: 'Join'})
}

export const login  = (req, res) => res.render("login", {pageTitle: 'Login'})
export const logout = (req, res) => res.render("logout",  {pageTitle: 'Log out'})
export const editProfile = (req, res) => res.render("editProfile",  {pageTitle: 'Edit Profile'})
export const userDetail = (req, res) => res.render("userDetail",  {pageTitle: 'Detail User'})
export const changePassword = (req, res) => res.render("changePassword",  {pageTitle: 'Change Password'})
