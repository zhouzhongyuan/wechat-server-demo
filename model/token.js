import mongoose, { Schema } from 'mongoose';
//
// const tokenSchema = new Schema({
//     access_token: String,
//     expires_in: Number,
//     refresh_token: String,
//     openid: String,
//     scope: String,
//     create_at: String,
// });
// // tokenSchema.statics.getToken = function (openid, cb) {
// //     this.findOne({ openid }, (err, result) => {
// //         if (err) throw err;
// //         return cb(null, result);
// //     });
// // };
// // tokenSchema.statics.setToken = function (openid, token, cb) {
// //     // 有则更新，无则添加
// //     const query = { openid };
// //     const options = { upsert: true };
// //     this.update(query, token, options, (err, result) => {
// //         if (err) throw err;
// //         return cb(null);
// //     });
// // };
// let Token;
// try{
//     Token = mongoose.model('Token', 'tokenSchema');
// }catch (e){
//     console.log('hhhe');
//     console.log(e);
// };
// export default Token;
//

const tokenSchema = new Schema(
    {
        access_token: String,
        expires_in: Number,
        refresh_token: String,
        openid: String,
        scope: String,
        create_at: String,
    },
    );
tokenSchema.statics.getToken = function (openid, cb) {
    this.findOne({ openid }, (err, result) => {
        if (err) throw err;
        return cb(null, result);
    });
};
tokenSchema.statics.setToken = function (openid, token, cb) {
    // 有则更新，无则添加
    const query = { openid };
    const options = { upsert: true };
    this.update(query, token, options, (err, result) => {
        if (err) throw err;
        return cb(null);
    });
};
const Token = mongoose.model('Token', tokenSchema);
export default Token;
// export {
//     taskSchema,
//     Task,
// };
