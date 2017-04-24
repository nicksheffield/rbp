const path               = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './client/index.jsx',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/,   loader: 'babel-loader',  exclude: /node_modules/ },
			{ test: /\.jsx$/,  loader: 'babel-loader',  exclude: /node_modules/ },
			{ test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}