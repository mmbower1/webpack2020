import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    target: "node",
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    node: false,
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: ["babel-loader"]
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ["file-loader"]
            }
        ]
    }
}