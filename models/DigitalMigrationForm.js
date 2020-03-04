// const user =require('./user');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create the User Schema
const ServiceQualitySchema = new Schema({
    // userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    date: {
        type: Date,
        required: true,
    },
    branchCode: {
        type: String,
    },
    branchName: {
        type: String,
    }
});
module.exports = Task = mongoose.model('digitalForm', ServiceQualitySchema);
