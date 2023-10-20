const jwt = require('./jwt.js');
const SECRET = 'c6a65234-9214-4822-bd40-ce841bf1e927';

exports.auth = async (req, res, next) => {
    const token = req.cookies['token'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
            next();
        } catch(error) {
            console.log({error});
            res.clearCookie('token');
            res.redirect('/users/login');
        }
    } else {
        next();
    }
};

exports.isAuth = async (req, res, next) => {
    if (!req.user) {
        return res.redirect('/users/login');
    }
    next();
};