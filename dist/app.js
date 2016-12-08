const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./server/router');

// baza

const db = require('./server/db');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(cors());
app.use(router);

app.all('**', cors());


app.get('**', function (req, res, next) {
	res.append('Origin', 'http://localhost:4200');

	res.sendFile(path.join(__dirname,'index.html'));
	console.log("***************");

});


app.listen(3000, function () {
	console.log('Example listening on port 3000!');
});


module.exports = app;