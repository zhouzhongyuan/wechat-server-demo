import oauthClient from '../oauthClient';

function getUser(openid) {
    return new Promise((resolve, reject) => {
        oauthClient.getUser(openid, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
}
export default getUser;
