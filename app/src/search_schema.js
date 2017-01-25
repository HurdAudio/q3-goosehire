const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  location: {},
  jobTitle: String,
  skillSet: String
});

module.exports = SearchSchema;
