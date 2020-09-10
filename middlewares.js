import routes from "./routes";

export const localMiddleWare = (req, res, next) => {
 res.locals.siteName = 'Metube';
 res.locals.routes = routes;
 //forward middle ware to the next handler
 next();
};