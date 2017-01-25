const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillsSchema = new Schema({
  skillSet: String,
  createdAt: { type: Date, default: Date.now}
});

module.exports = SkillsSchema;
