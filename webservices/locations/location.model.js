const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Codes: { type: String, unique: true, required: true },
    Location: { type: String, unique: true, required: true },
    Distributions: { type: String, unique: true, required: true },
    Regions: { type: String, unique: true, required: true },
    Areas: { type: String, unique: true, required: true },
    Status: { type: String, unique: true, required: true },

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Locations', schema);