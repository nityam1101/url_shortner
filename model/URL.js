const mongoose = require('mongoose');

exports.URL = mongoose.model('URL', {
    dest: { type: String, required: true, unique: true },
    sort: { type: String, required: true, unique: true }
});