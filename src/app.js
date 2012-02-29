var http = require('http')
	, fs = require('fs')
	, path = require('path');

http.createServer(function(req, res){
	var extname = path.extname(req.url)
	   ,basename = path.basename(req.url)
       ,filepath = ''
	   ,contentType = '';
	
	switch(extname) {
//		case '.css':
//		    filepath = Application.BOOTSTRAP_CSS_DIR + basename;
//			contentType = 'text/css';
//			break;
		case '.js':
		    filepath = './' + basename;
			contentType = 'text/javascript';
			break;
		case '.html':
		    filepath = './' + basename;
			contentType = 'text/html';
			break;
		case '.png':
		    filepath = '../img/' + basename;
			contentType = 'image/png';
			break;
		default:
			break;
	}
	if( filepath !== '') {
		fs.readFile(filepath, 'binary', function(err, content){
          if( err ){
		  }
		  else{
			  res.writeHead(200, {'Content-Type' : contentType});
			  res.end(content, 'binary');
		  }
		});
	}
}).listen(8124);

