module.exports = {
    entry: {
        bind: ['babel-polyfill', './bind/index'],
        welcome: ['babel-polyfill', './welcome/index'],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
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
                exclude: /node_modules/,
            },
        ],
    },
    watch: true,
};
