const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    , path = require('path')
    ;

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|tsx?)$/,
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
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	plugins: [new UglifyJsPlugin()],

	entry: {
		app: './pc/ts/app.ts'
	},

  // 下記のエラーに対応するための設定
  // `app.js:5 Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "default-src 'self'".`
  devtool: 'cheap-module-source-map',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../public/assets/pc')
	},

	mode: 'development'
};
