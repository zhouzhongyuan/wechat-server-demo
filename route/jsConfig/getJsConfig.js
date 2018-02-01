import api from '../../api';

function getJsConfig(param) {
    return new Promise((resolve, reject) => {
        api.getJsConfig(param, (err, result) => {
            console.log(err, result)
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
}
export default getJsConfig;
