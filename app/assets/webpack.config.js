const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
		, MiniCssExtractPlugin = require("mini-css-extract-plugin")
    , path = require('path')
    ;

module.exports = {
	module: {
		rules: [
			{
				test: /\.(tsx?)$/,
				exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
				    options: {
				    	presets: ['env']
				    }
          },
          {
            loader: 'ts-loader'
          }
        ]
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader?minimize&sourceMap!sass-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new UglifyJsPlugin()
	],
	entry: {
		'css/reset': ['./read_css/reset_css.js'],
		'js/app': ['./ts/common/app.ts']
	},

  // 下記のエラーに対応するための設定
  // `app.js:5 Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "default-src 'self'".`
  devtool: 'cheap-module-source-map',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../../public/assets')
	},

	mode: 'development'
};
