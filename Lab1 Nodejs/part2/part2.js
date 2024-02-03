var http = require('http');
var fs = require('fs');
// var qs = require('querystring');
var url = require('url');
const { register } = require('module');

var handler = function(req , res){
    if(req.url == '/part2/login.html'){
        // res.end("test");
        fs.readFile('login.html',function(err,data){
            res.write(data);
            res.end("");
        });
       
    }
    else if(req.url.indexOf('/login') > -1){
        let parseurl = url.parse(req.url,true);
        let pass = parseurl.query.pass; 
        if(pass.length >= 8){
            res.write('registration success 👌');
            console.log(pass);
        }
        else{
            res.write('registration failed try again :(');
        }
        res.end("");

    }
}

const ss =  http.createServer(handler);
ss.listen(8080);
