const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const ItemSchema = new Schema({
    branchLocation: {
        type: String,
    },
    hostName: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now
    },
    security_q1: {
        type: String,
    },
    security_q2: {
        type: String,
    },
    security_q3: {
        type: String,
    },
    exterior_q1: {
        type: String,
    },
    exterior_q2: {
        type: String,
    },
    exterior_q3: {
        type: String,
    },
    exterior_q4: {
        type: String,
    },
    exterior_q5: {
        type: String,
    },
    hall_q1: {
        type: String,
    },
    hall_q2: {
        type: String,
    },
    hall_q3: {
        type: String,
    },
    hall_q4: {
        type: String,
    },
    hall_q5: {
        type: String,
    },
    hall_q6: {
        type: String,
    },
    hall_q7: {
        type: String,
    },
    hall_q8: {
        type: String,
    },
    hall_q9: {
        type: String,
    },
    hall_q10: {
        type: String,
    },
    hall_q11: {
        type: String,
    },
    hall_q12: {
        type: String,
    },
    hall_q13: {
        type: String,
    },
    hall_q14: {
        type: String,
    },

    display_q1: {
        type: String,
    },
    display_q2: {
        type: String,
    },
    display_q3: {
        type: String,
    },
    display_q4: {
        type: String,
    },
    display_q5: {
        type: String,
    },
    branch_q1: {
        type: String,
    },
    branch_q2: {
        type: String,
    },
    branch_q3: {
        type: String,
    },
    branch_q4: {
        type: String,
    },
    branch_q5: {
        type: String,
    },
    branch_q6: {
        type: String,
    },
    atm_q1: {
        type: String,
    },
    atm_q2: {
        type: String,
    },
    atm_q3: {
        type: String,
    },
    atm_q4: {
        type: String,
    },
    atm_q5: {
        type: String,
    },
    atm_q6: {
        type: String,
    },
    atm_q7: {
        type: String,
    },
    atm_q8: {
        type: String,
    },
    atm_q9: {
        type: String,
    },
    atm_q10: {
        type: String,
    },
    atm_q11: {
        type: String,
    },
    systems_q1: {
        type: String,
    },
    systems_q2: {
        type: String,
    },


},
    {
        collection: 'scdBranchForm'

    });


module.exports = Item = mongoose.model('scdBranchForm', ItemSchema);