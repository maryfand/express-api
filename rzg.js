var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/person')



var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    password: String,
    age: String
  })

  var User = mongoose.model('user', userSchema);
  // cat 是实际数据库中记录的名字
  var feng = new User({ name: 'feng', password: '111', age: '24' });
  // 成功构建一条数据记录
  feng.save()

  feng.name = 'li'
  feng.password = '123'
  feng.save()

  // User.findById({_id: '57ecb8c5b080a90d628a7a4c'}, function(err, user) {
  //   user.name = 'rrrrrr'
  //   user.save(function(err){
  //     console.log('更新了！')
  //     User.find().exec(function(err, users) {
  //       // 异步执行
  //       console.log(users);
  //     });
  //   });
  // });
  // console.log("我先出来了")

  // User.findById({_id: '57edd53a6c08e90b59ac1033'}, function(err, user) {
  //   user.remove(function(err){
  //     console.log('删除了！')
  //
  //     User.find().exec(function(err, users) {
  //       // 异步执行
  //       console.log(users);
  //     });
  //   });
  // });


  // console.log(User.find());
})
