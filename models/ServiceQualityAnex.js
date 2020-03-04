const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const ItemSchema = new Schema({
    location: {
        type: String,
    },
    hostName: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now
    },
    cash_q1: {
        type: String,
    },
    cash_q2: {
        type: String,
    },
    cash_q3: {
        type: String,
    },
    cash_q4: {
        type: String,
    },
    remittance_q1: {
        type: String,
    },
    remittance_q2: {
        type: String,
    },
    clearing_q1: {
        type: String,
    },
    clearing_q2: {
        type: String,
    },
    clearing_q3: {
        type: String,
    },
    clearing_q4: {
        type: String,
    },
    clearing_q5: {
        type: String,
    },
    miscellaneous_q1: {
        type: String,
    },
    miscellaneous_q2: {
        type: String,
    },
    miscellaneous_q3: {
        type: String,
    },
    miscellaneous_q4: {
        type: String,
    },
    miscellaneous_q5: {
        type: String,
    },
    miscellaneous_q6: {
        type: String,
    },
    miscellaneous_q7: {
        type: String,
    },
    miscellaneous_q8: {
        type: String,
    },
    deposit_q1: {
        type: String,
    },
    deposit_q2: {
        type: String,
    },
    deposit_q3: {
        type: String,
    },
    deposit_q4: {
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





    gold_loan_processing_new_q1: {
        type: String,
    },
    gold_loan_processing_new_q2: {
        type: String,
    },
    gold_loan_processing_new_q3: {
        type: String,
    },
    gold_loan_processing_new_q4: {
        type: String,
    },
    gold_loan_processing_new_q5: {
        type: String,
    },
    gold_loan_processing_new_q6: {
        type: String,
    },
    passbook_new_q1: {
        type: String,
    },
    passbook_new_q2: {
        type: String,
    },
    passbook_new_q3: {
        type: String,
    },
    passbook_new_q4: {
        type: String,
    },
    passbook_new_q5: {
        type: String,
    },
    passbook_new_q6: {
        type: String,
    },
    mortgage_new_q1: {
        type: String,
    },
    mortgage_new_q2: {
        type: String,
    },
    mortgage_new_q3: {
        type: String,
    },
    mortgage_new_q4: {
        type: String,
    },
    mortgage_new_q5: {
        type: String,
    },
    mortgage_new_q6: {
        type: String,
    },
    personal_new_q1: {
        type: String,
    },
    personal_new_q2: {
        type: String,
    },
    personal_new_q3: {
        type: String,
    },
    personal_new_q4: {
        type: String,
    },
    personal_new_q5: {
        type: String,
    },
    personal_new_q6: {
        type: String,
    },
    loan_new_q1: {
        type: String,
    },
    loan_new_q2: {
        type: String,
    },
    loan_new_q3: {
        type: String,
    },
    loan_new_q4: {
        type: String,
    },
    loan_new_q5: {
        type: String,
    },
    loan_new_q6: {
        type: String,
    },







    gold_loan_processing_repeat_q1: {
        type: String,
    },
    gold_loan_processing_repeat_q2: {
        type: String,
    },
    gold_loan_processing_repeat_q3: {
        type: String,
    },
    gold_loan_processing_repeat_q4: {
        type: String,
    },
    gold_loan_processing_repeat_q5: {
        type: String,
    },
    gold_loan_processing_repeat_q6: {
        type: String,
    },
    passbook_repeat_q1: {
        type: String,
    },
    passbook_repeat_q2: {
        type: String,
    },
    passbook_repeat_q3: {
        type: String,
    },
    passbook_repeat_q4: {
        type: String,
    },
    passbook_repeat_q5: {
        type: String,
    },
    passbook_repeat_q6: {
        type: String,
    },
    mortgage_repeat_q1: {
        type: String,
    },
    mortgage_repeat_q2: {
        type: String,
    },
    mortgage_repeat_q3: {
        type: String,
    },
    mortgage_repeat_q4: {
        type: String,
    },
    mortgage_repeat_q5: {
        type: String,
    },
    mortgage_repeat_q6: {
        type: String,
    },
    personal_repeat_q1: {
        type: String,
    },
    personal_repeat_q2: {
        type: String,
    },
    personal_repeat_q3: {
        type: String,
    },
    personal_repeat_q4: {
        type: String,
    },
    personal_repeat_q5: {
        type: String,
    },
    personal_repeat_q6: {
        type: String,
    },
    loan_repeat_q1: {
        type: String,
    },
    loan_repeat_q2: {
        type: String,
    },
    loan_repeat_q3: {
        type: String,
    },
    loan_repeat_q4: {
        type: String,
    },
    loan_repeat_q5: {
        type: String,
    },
    loan_repeat_q6: {
        type: String,
    },

    remarks: {
        type: String,
    },


},
    {
        collection: 'serviceQualityAnexC'

    });


module.exports = Item = mongoose.model('serviceQualityAnexC', ItemSchema);