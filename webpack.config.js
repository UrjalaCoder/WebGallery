const path = require('path')

module.exports = [
	{
		entry: './src/index.tsx',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					use: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: [
						'style-loader', 'css-loader'
					]
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.css'],
			mainFiles: ['index']
		},
		name: 'front-end',
		mode: 'development'
	},
	{
		target: 'node',
		entry: './src-server/index.ts',
		output: {
			path: path.resolve(__dirname, 'dist-server'),
			filename: 'bundle.js'
		},
		resolve: {
			mainFields: ['main', 'module'],
			mainFiles: ['index'],
			extensions: ['.ts', '.js'],
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: 'babel-loader',
					exclude: /node_modules/
				}
			]
		},
		name: 'server',
		mode: 'development'
	}
]
