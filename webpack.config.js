module.exports = {
	entry: './dev/js/app.js',
	output: {
		path: './resource-bundles/promises.resource/js',
		filename: 'app.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	}
};