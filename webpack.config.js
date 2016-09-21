var path              = require('path');
var webpack           = require('webpack');
var plugins           = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
	})
];
module.exports = {
	context: __dirname,
	entry: [
		//'webpack-dev-server/client?http://0.0.0.0:4001', // WebpackDevServer host and port
		//'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./src/Main.jsx'
	],
	output: {
		path: __dirname + '/public/build',
		publicPath: '/public/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.(jsx|js)?$/,
				loader: ['babel-loader'],
				exclude: /node_modules/,
				extensions: ['', '.js', '.jsx', '.json', '.node'],
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			},
			{
				test: /\.(scss|sass)/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./src")]
	},
	devServer: {
		contentBase: './public',
		host: '192.168.25.6',
		hot: true,
		port: 4001,
		publicPath: './public',
		stats: {colors: true}
	},
	plugins: plugins
};
