import api from '../../api';

function getToken() {
    return new Promise((resolve, reject) => {
        api.getLatestToken((err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
}
export default getToken;
