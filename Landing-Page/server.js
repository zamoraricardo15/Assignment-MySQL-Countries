var http = require('http');
//fs module allows us to read & write for responses
var fs = require('fs');
// creating a server using http module
var server = http.createServer(function (request, response){
	//see what URL the clients are requesting
	console.log('client request URL:', request.url);
	// this is how we do routing
	if(request.url === '/'){
		fs.readFile('main.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
			response.write(contents); //send response body
			response.end(); //finished!
		});
	}
	else if(request.url === "/dojos"){
		fs.readFile('dojos.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/ninjas"){
		fs.readFile('ninja.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}


});

var PORT = 6789;
server.listen(PORT);
console.log("Running in localhost at port: " + PORT);