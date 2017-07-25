module.exports = {
    entry: './bind/index',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    node: {
        fs: 'empty',
        child_process: 'empty',
    },
    watch: true,
};
