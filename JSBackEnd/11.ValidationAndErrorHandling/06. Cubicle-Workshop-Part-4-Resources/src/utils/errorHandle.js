const {MongooseError} = require('mongoose');

exports.exactErrorMsg = (error) => {
    const isInstanceOfMongoose = error instanceof MongooseError;
    console.log({isInstanceOfMongoose});
    console.log({error});
    if (isInstanceOfMongoose) {
        const errors = Object.values(error.errors);
        const msgs = errors.map((e) => e.message);
        console.log({errors});
        console.log({msgs});
        return msgs;
    };
    return [error.message];
}