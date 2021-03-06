var express = require('express'),
    helmet = require('helmet'),
    favicon = require('serve-favicon'),
    path = require('path'),
    compression = require('compression'),
    //bodyParser = require('body-parser'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    web = require('./web');

app.use(helmet());
app.use(favicon(path.join(__dirname , 'web/favicon/favicon.ico')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());


app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'web')));
app.use(express.static(path.join(__dirname,'web/application')));


app.use('/', web);
app.set('port', process.env.PORT || /*config.system.port ||*/ '3001');

server.listen(app.get('port'), function () {
    console.log('Приложение запущено на порту http://localhost:' + app.get('port'));
});
