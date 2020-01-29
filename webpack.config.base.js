const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [['@babel/preset-env', {
						targets: [
							// run npx browserslist 'last 2 versions, not dead, not <2%' to fetch a list of browsers with the above conditions
							'last 2 versions',
							'not dead',
							'not <2%',
							'not ie 11'
						],
						useBuiltIns: 'entry'
					}], '@babel/preset-react'],
					plugins: [
						'react-hot-loader/babel',
						'@babel/plugin-proposal-class-properties'
					]
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [new HtmlWebPackPlugin({
		template: './src/index.html'
	})]
};
