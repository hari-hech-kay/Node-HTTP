var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
});
let port = process.env.PORT || 5695;
app.listen(port);



