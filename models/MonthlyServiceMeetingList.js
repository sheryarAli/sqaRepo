const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const DigitalMigrationSchema = new Schema({
    monthlyServiceMeetingFormId: { type: Schema.Types.ObjectId, ref: 'monthlyServiceMeetingForm', required: true },

    staffNameAtendees: {
        type: String,
    },
    staffEmployeeNoAttendees: {
        type: String,
    },
    functionalTitleAttendees: {
        type: String,
    },
    staffNameAbsentees: {
        type: String,
    },
    staffEmployeeNoAbsentees: {
        type: String,
    },
    functionalTitleAbsentees: {
        type: String,
    }
},
    {
        collection: 'monthlyServiceMeetingFormList'

    });


module.exports = MonthyServiceMeetingFormList = mongoose.model('monthlyServiceMeetingFormList', DigitalMigrationSchema);