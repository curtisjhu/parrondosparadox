const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js",
    },
    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images'
                    }
            }],
            }
        ]
    }
};
