const path = require("path");

module.exports = {
  // mode: "development",
  // devtool: "inline-source-map",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  entry: "./src/index.ts",
  target: "node",
  output: {
    filename: "bundle.cjs",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

// module.exports = {
//   entry: './src/index.js', // Entry point of your application
//   output: {

//     filename: 'bundle.cjs', // Output filename
//   },
//   target: 'node', // Ensure it's targeting Node.js
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: 'babel-loader', // Assuming you're using Babel
//       },
//     ],
//   },
// };
