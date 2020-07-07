// mock数据
let api = require("./api");

// 路由和数据的聚合
const config = [
    {
        method: "get",
        url: api.getUserInfo.url,
        data: require("./data/getUserInfo.js")
    }
];

module.exports = config;