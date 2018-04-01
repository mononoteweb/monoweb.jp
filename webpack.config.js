module.exports = {
	mode: 'development',
	entry: {
		'main': './src/tsx/main.tsx'
	},
	output: {
		path: __dirname + '/public/common/js',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: 'ts-loader'
			}
		]
	},
	plugins: [],
	resolve: {
		extensions: [
			'.ts', '.tsx', '.js', '.json'
		]
	}
};
