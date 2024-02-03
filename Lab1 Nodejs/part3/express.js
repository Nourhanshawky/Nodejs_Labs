const exp = require('express');
const path = require('path');
const app = exp();

app.get('/part3/index.html',function(req,res){
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
})

app.listen(8080,function(){
    console.log('server started');
})