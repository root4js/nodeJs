/**
 * Author:root4js@IBO
 * DATE:2015-01-10
 * 
 */
var http=require("http");
var server=http.createServer(function(request,response){
	response.writeHead(200, {"content-type":"text/plain"})
	response.end("Hello World");
});
/*Port:8888*/
server.listen(8888);
console.log("Server is running .... ");
