module.exports = {
    requireAuth: function(req, res, next) {
        console.log('Private route hit!');
        next();
    },
    logReq: function(req, res, next) {
        console.log(`Request at ${ new Date().toString() }: ${ req.method } ${ req.originalUrl }`);
        next();
    }
};