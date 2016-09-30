var express = require('express');

module.exports = function(app) {
  // 创建一个 Router 实例
  var apiRoutes = express.Router();

  // 所有的 API 都以 '/api' 开头
  app.use('/api', apiRoutes);

  // 响应 HTTP Get 请求
  apiRoutes.get('', function(req, res) {
    res.json({message: 'get request!'})
  });

  // 响应 HTTP Post 请求
  apiRoutes.post('', function(req, res) {
    console.log(req.body)
    res.json({message: 'post request!'})
  });
}
