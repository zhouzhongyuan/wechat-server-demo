import oauthClient from '../oauthClient';

function getOpenid(code) {
    return new Promise((resolve, reject) => {
        oauthClient.getAccessToken(code, (err, result) => {
            if (!err) {
                const openid = result.data.openid;
                resolve(openid);
            } else {
                reject(err);
            }
        });
    });
}
export default getOpenid;
