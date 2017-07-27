import api from '../api';
/*
{
 "groups": [
   {"id": 0, "name": "未分组", "count": 72596},
   {"id": 1, "name": "黑名单", "count": 36}
 ]
}
* */
const getGroups = function () {
    return new Promise((resolve, reject) => {
        api.getGroups((err, result) => {
            if (!err) {
                resolve(result);
            }
            reject(err);
        });
    });
};
const removeGroup = function (groupId) {
    return new Promise((resolve, reject) => {
        api.removeGroup(groupId, (err, result) => {
            if (!err) {
                resolve(result);
            }
            reject(err);
        });
    });
};
const createGroup = function (groupname) {
    return new Promise((resolve, reject) => {
        api.createGroup(groupname, (err, result) => {
            if (!err) {
                resolve(result);
            }
            reject(err);
        });
    });
};

/*
* 业务代码
* 创建分组
* */
const groupList = ['货主', '司机'];

async function main() {
    let createdGroupList = await getGroups();
    createdGroupList = createdGroupList.groups;
    for (const v of groupList) {
        let hasGroup = false;
        for (const createdGroup of createdGroupList) {
            if (createdGroup.name === v) {
                hasGroup = true;
                break;
            }
        }
        if (!hasGroup) {
            await createGroup(v);
        }
    }
}

async function deleteGroup() {
    for (let i = 168; i <= 169; i++) {
        await removeGroup(i);
    }
}
try {
    // deleteGroup();
    main();
} catch (e) {
    console.log(e);
}
