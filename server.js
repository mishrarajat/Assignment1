/**
 * Created by RajatMishra on 4/13/2016.
 */

//setup Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var _ = require('underscore');
var cons = require('consolidate');
var util = require('util');
var app = express();
var bodyParser = require('body-parser');

var bin = require('./routes/bin_module');

app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view options', {layout: false});
app.engine('html', cons.underscore);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', bin.index);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('server running at port: '+ app.get('port'))
});