/*global process, require*/
'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const _branchName = 'master';
const _lastUpdated = 'April 29th at 12:16pm';

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Code is from branch: ' + _branchName + '\nlast updated on: ' + _lastUpdated);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/ for branch ` + _branchName);
});
