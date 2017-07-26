module.exports = {
    entry: ['babel-polyfill', './bind/index'],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
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
