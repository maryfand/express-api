var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: String,
    category:string,
    content:string
  },
  {
    timestamps:true
  }
)

module.exports = mongoose.model('Post', PostSchema);
