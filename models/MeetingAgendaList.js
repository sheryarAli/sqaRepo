const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const MeetingAgendSchema = new Schema({
    monthlyServiceMeetingFormId: { type: Schema.Types.ObjectId, ref: 'monthlyServiceMeetingForm', required: true },

    action: {
        type: String,
    },
    responsibility: {
        type: String,
    },
    targetDate: {
        type: String,
    }
},
    {
        collection: 'meetingAgendaList'

    });


module.exports = MonthyServiceMeetingFormList = mongoose.model('meetingAgendaList', MeetingAgendSchema);