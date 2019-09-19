var http = require('http');
var moduleob = require('./module');
var port = process.env.port || 1337;
http.createServer(function(req,res){
    res.writeHead(200,{ 'Content-Type': 'text/plain' });
    res.write(moduleob.mul(10,20).toString());
    res.end(moduleob.sum(10,20).toString());
}).listen(port);
