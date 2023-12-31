const errorHandler = (error, req, res, next) => {
    res.status(error.status || 400).send(error.message);
    next(error);
};

module.exports = errorHandler;