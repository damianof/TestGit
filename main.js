/*global process, require*/
'use strict';
const git = require('git-rev');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

let _branchName = 'XYZ';
const _lastUpdated = 'April 29th at 12:16pm';

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Code is from branch: ' + _branchName + '\nlast updated on: ' + _lastUpdated);
});

git.branch(function (str) {
	console.log('branch', str)
	_branchName = str;
	
	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/ for branch ` + _branchName);
	});
})


