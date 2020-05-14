module.exports = (req,res,next) => {
    res.header('Access-Control-Allow-Origen', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Methods', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}