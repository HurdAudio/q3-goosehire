const mongoose = require('mongoose');
// const db = require('./db');
const SkillsSchema = require('./skills_schema');
const SearchSchema = require('./search_schema');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username is required']
  },
  hashedPassword: {
    type: String,
    validate: {
      validator: (hashedPassword) => hashedPassword.length === 16,
      message: 'if ur password isnt 16 characters, its probably not hashed'
    },
    required: [true, 'password is required']
  },
  skills: [SkillsSchema],
  searches: [SearchSchema]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
