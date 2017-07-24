var api = require('../api');
api.getGroups(function (err, result) {
    if(!err){
        console.log(result);
    }
});

// 创建分组
api.createGroup('货主', function (err, result) {

});
api.createGroup('司机', function (err, result) {

});

// 获取openid