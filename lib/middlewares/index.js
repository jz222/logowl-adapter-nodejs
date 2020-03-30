const broker = require('../broker/');

const errorHandler = (error, req, res, next) => {
    broker.error(error);
    
    next(error);
};

module.exports = { errorHandler };