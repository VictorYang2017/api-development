var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

ArticleSchema.methods.toJSON = function () {
  return {
    id: this._id,
    title: this.title,
    description: this.description,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    author: this.author.toJSON()
  };
};

mongoose.model('Article', ArticleSchema);