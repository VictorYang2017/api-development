var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  displayName: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  }, 
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }]
}, {timestamps: true});

UserSchema.methods.toJSON = function(){
  return {
    id: this._id,
    displayName: this.displayName,
    email: this.email
  };
};

mongoose.model('User', UserSchema);