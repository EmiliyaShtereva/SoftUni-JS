const {exactErrorMsg} = require('../utils/errorHandle')
module.exports = (err, req, res, next) => {
    const errorMessage = exactErrorMsg(err);
    res.render('404', {errorMessage});
}