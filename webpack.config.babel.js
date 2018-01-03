// var cssnext = require('postcss-cssnext');
// var postcssFocus = require('postcss-focus');
// var postcssReporter = require('postcss-reporter');
const path = require('path');

var cssModulesIdentName = '[name]__[local]__[hash:base64:5]';
if (process.env.NODE_ENV === 'production') {
  cssModulesIdentName = '[hash:base64]';
}

// remove deprecation warning
process.noDeprecation = true

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
				test: /\.css$/,
				loader: 'style-loader',
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				options: {
					modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          esversion: 6, 
          camelcase: false,
				}
			},
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: 'style-loader!css-loader?localIdentName=' + cssModulesIdentName + '&modules&importLoaders=1&sourceMap!postcss-loader',
      // },
      // {
      //   test: /react-big-calendar.css$/,
      //   include: /node_modules/,
      //   loader: 'style-loader!css-loader',
      //   // use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  
  // postcss: () => [
  //   postcssFocus(),
  //   cssnext({
  //     browsers: ['last 2 versions', 'IE > 10'],
  //   }),
  //   postcssReporter({
  //     clearMessages: true,
  //   }),
  // ],
};
