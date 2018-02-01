import api from '../../api';

function getTicket() {
    return new Promise((resolve, reject) => {
        api.getLatestTicket((err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
}
export default getTicket;
