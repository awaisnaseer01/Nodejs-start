const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.SchemaTypeOptions({

});

module.exports = mongoose.model("user", userSchema);