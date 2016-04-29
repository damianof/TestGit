/*global process, require*/
'use strict';
const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

fs.readFile('branch.txt', 'utf8', (err, str) => {
	if (err){
		throw err;
	}
	
	console.log('branch', str);
	
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('MM Code is from branch: ' + str);
	});
	
	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/ for branch ` + str);
	});
});
