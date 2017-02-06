var path = require('path');

module.exports = {
	entry: './hello.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};