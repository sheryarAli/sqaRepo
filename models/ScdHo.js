const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const ItemSchema = new Schema({
    hoLocation: {
        type: String,
    },
    hostName: {
        type: String,
    },
    hostDept: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now
    },
    floor_q1: {
        type: String,
    },
    floor_q2: {
        type: String,
    },
    floor_q3: {
        type: String,
    },
    floor_q4: {
        type: String,
    },
    floor_q5: {
        type: String,
    },
    floor_q6: {
        type: String,
    },
    floor_q7: {
        type: String,
    },
    floor_q8: {
        type: String,
    },
    floor_q9: {
        type: String,
    },
    floor_q10: {
        type: String,
    },
    floor_q11: {
        type: String,
    },
    floor_q12: {
        type: String,
    },
    floor_q13: {
        type: String,
    },
    floor_q14: {
        type: String,
    },
    floor_q15: {
        type: String,
    },
    floor_q16: {
        type: String,
    },
    staff_q1: {
        type: String,
    },
    staff_q2: {
        type: String,
    },
    staff_q3: {
        type: String,
    },
    staff_q4: {
        type: String,
    },
    staff_q5: {
        type: String,
    },
    staff_q6: {
        type: String,
    },
    staff_q7: {
        type: String,
    },
    staff_q8: {
        type: String,
    },

},
    {
        collection: 'scdHoForm'

    });


module.exports = Item = mongoose.model('ScdHoForm', ItemSchema);