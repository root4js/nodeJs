/**
 * Author:root4js@IBO
 * DATE:2015-01-10
 * 
 */
var express=require('express');
var app=express();

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
res.send('Hello world !!!!! ');
});


app.get('/root4js',function(req,res){
res.send('root4js');
});

app.listen(8888);
console.log("Express Server is running .... ");