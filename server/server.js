var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain','Access-Control-Allow-Origin' :'*'});
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	var filetype = filename.slice(2);
	filetype = filetype.slice(filetype.indexOf('.'));
	fs.readFile(filename, function(err, data) {
  	if (err) {
      		res.writeHead(404, {'Content-Type': 'text/html'});
      		return res.end("404 Not Found");
    	}
	if (filetype.includes('.jpeg')){
		res.writeHead(200, {'Content-Type' : 'image/jpeg'});
		return res.end(data);
	}
	if (filetype.includes('.html')){
    		res.writeHead(200, {'Content-Type': 'text/html'});
    		res.write(data);
    		return res.end();
	}
  	});
}).listen(8080);
