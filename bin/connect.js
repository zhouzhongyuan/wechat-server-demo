import mongoose from 'mongoose';

mongoose.Promise = Promise;
function connect(url, opt) {
    return new Promise((resolve, reject) => {
        mongoose.connect(url, opt)
            .then(
                () => {
                    resolve('Database connect success.');
                    console.log('Database connect success.'); // eslint-disable-line no-console
                },
                (err) => {
                    reject(`Mongoose connections error: ${err}`);
                    console.error(`Mongoose connections error: ${err}`); // eslint-disable-line no-console
                    process.exit(1);
                },
            );
    })

}
export default connect;
