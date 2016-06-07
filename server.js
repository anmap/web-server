var express = require('express');
var app = express();

// Check environment variable PORT on production server
const PORT = process.env.PORT || 3000;

var middleware = require('./middleware');
app.use(middleware.logReq);

app.get('/about', middleware.requireAuth, function(req, res) {
    res.send('About Us');    
});

app.use(express.static(`${ __dirname }/public`));

app.listen(PORT, () => console.log(`Express server started at port ${ PORT }.`));