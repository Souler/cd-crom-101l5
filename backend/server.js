// external requires
var http = require('http');
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// local requires
var api = require('./api');
var site = require('./controllers');
var utils = require('./utils');
var router = require('./router');
var pckg = require('../package.json');

// load config
var conf = require('./config.js');

// variable init
var app = express();

// config app
app.set('port', conf.port);
app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

// logging
morgan.token('status', utils.morgan.responseColor)
app.use(morgan('tiny'));

// frontend paths routing
app.use('/app', express.static(path.join(__dirname, '../frontend/app/')));
app.use('/components', express.static(path.join(__dirname, '../frontend/components/')));
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets/')));

// router config
router(app);

//db connection
//mongoose.connect('mongodb://localhost:27017/cdcrom');

// link global obj to package
global.appInfo = pckg;

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port %d', app.get('port'));
});