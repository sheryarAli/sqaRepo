// const user =require('./user');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create the User Schema
const MonthltServieMeetingFormSchema = new Schema({
    // userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    date: {
        type: Date,
        default: Date.now
    },
    branch: {
        type: String,
    },
    region: {
        type: String,
    }
});
module.exports = MonthlyServiceMeetingForm = mongoose.model('monthlyServiceMeetingForm', MonthltServieMeetingFormSchema);
