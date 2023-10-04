const jwt = require('jsonwebtoken');

const sign = (payload, secret, option) => {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, option, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
    return promise;
};
const verify = (payload, secret) => {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
    return promise;
};

const jwtPromises = {sign, verify};
module.exports = jwtPromises;