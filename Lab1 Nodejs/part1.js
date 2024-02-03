const http = require('http');
var fs = require('fs');

var handler = function (req, res) {
    if(req.url === "/index.html"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('index.html',function(err,data){
        res.write(data);
        res.end("");  
   })
}
else if(req.url === "/form.html"){
    res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('form.html',function(err,data){
        res.write(data);
        res.end("");  
        })
}

else if(req.url === "/roadmap.html"){
    res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('roadmap.html',function(err,data){
        res.write(data);
        res.end("");  
        })
}

else{
    res.end("error");
}
}

const ss = http.createServer(handler);
ss.listen(8080);