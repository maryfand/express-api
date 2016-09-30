var express = require('express');
var  app = express();

app.get('/posts', function(req, res) {
  console.log('GET /posts')
})
app.get('/posts/:id', function(req, res) {
  console.log('GET /posts/:id')
})
回调
app.listen(3000, function() {
  console.log('running on port 3000')
})
