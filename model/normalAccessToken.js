import mongoose, { Schema } from 'mongoose';

const normalAccessTokenSchema = new Schema({
        access_token: String,
        expires_in: Number,
        create_at: String,
    });
// TODO getToken待修改。这个表格只有一行。
normalAccessTokenSchema.statics.getToken = function (openid, cb) {
    this.findOne({ openid }, (err, result) => {
        if (err) throw err;
        return cb(null, result);
    });
};
// TODO setToken待修改。这个表格只有一行。
normalAccessTokenSchema.statics.setToken = function (openid, token, cb) {
    // 有则更新，无则添加
    const query = { openid };
    const options = { upsert: true };
    this.update(query, token, options, (err, result) => {
        if (err) throw err;
        return cb(null);
    });
};
const NormalAccessToken = mongoose.model('NormalAccessToken', normalAccessTokenSchema);
export default NormalAccessToken;
