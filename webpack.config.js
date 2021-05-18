const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV === 'development';
module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, "src", "index.js")],
    output: { 
        path: path.join(__dirname, "dist"), 
        filename: "bundle.js",
        publicPath: '/' 
    },
    mode: process.env.NODE_ENV || "development",
    resolve: { 
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            src: path.resolve(__dirname, 'src'),
            views: path.resolve(__dirname, 'src/views'),
        }  
    },
    devServer: { 
        contentBase: './dist',
        historyApiFallback: true
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};