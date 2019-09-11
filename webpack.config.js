// module.exports = {
//   entry: './index.js', // assumes your entry point is the index.js in the root of your project folder
//   mode: 'development',
//   output: {
//     path: __dirname, // assumes your bundle.js will also be in the root of your project folder
//     filename: 'bundle.js'
//   },
//   devtool: 'source-maps',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ["es2015"]
//           }
//         }
//       }
//     ]
//   }
// }
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
