/*
 * @Author: gm.chen
 * @Date: 2021-04-15 07:24:25
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-17 17:37:09
 * @Description: file content
 * @FilePath: /vue-demo/service/api/controller/public/login.js
 */
'use strict';
var mongoose = require('mongoose');
var common = require('../common');
var Login = mongoose.model('Login');
module.exports.login = function(req,res) {
    var userName = req.userName;
    Login.find({'userName':userName},function(err,data) {
        if (err) {
            common.sendJsonResponse(res, 500, err);
            return;
        }
        console.log(data);
        common.sendResponse(res, 200, data);
    })
}
