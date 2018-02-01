const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { optimize } = webpack;
const { CommonsChunkPlugin } = optimize;
module.exports = {
    resolve: {
        alias: {
            wx: path.resolve(__dirname, './welcome/index.js'),
        },
    },

    entry: {
        // bind: ['babel-polyfill', './bind/index'],
        welcome: ['babel-polyfill', './welcome/index'],
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: 'static/dist/',
        filename: '[name].[chunkhash].js',
    },
    target: 'web',
    node: {
        fs: 'empty',
        child_process: 'empty',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'welcome/index.js'),
                exclude: [
                    /node_modules/,
                    './jweixin-1.2.0.js',
                ],
            },
        ],
        rules: [
            {
                test: require.resolve('./jweixin-1.2.0.js'),
                use: 'imports-loader?this=>window',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './welcome/index.html',
            inject: true,
            minify: {
                removeComments: false,
                collapseWhitespace: false,
                removeRedundantAttributes: false,
                useShortDoctype: false,
                removeEmptyAttributes: false,
                removeStyleLinkTypeAttributes: false,
                keepClosingSlash: false,
                minifyJS: false,
                minifyCSS: false,
                minifyURLs: false,
            },

        }),
    ],
    watch: true,
};
