var express = require('express');
var path = require('path');
var cors = require('cors');
const bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var http = require('http');
var Static = require('node-static');


let router = express.Router();

var app = express();
app.use(cors());
app.use(bodyParser.json());


const appRoutes = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'client/src')));

app.get('/*', (req, res) =>{
    //res.sendFile('index.html', { root: 'client/src' });
    file.serve(req, res);

});


var file = new Static.Server('./client/src');
var port = process.env.PORT || 5000;
app.set('port',port);


// http.createServer(function (request, response) {
//     request.addListener('end', function () {
//         file.serve(request, response);
//     })
// });

app.use('/appRoutes',router);
app.use('/',appRoutes);
app.listen(port);

console.log('server started '+port);

module.exports = app;

