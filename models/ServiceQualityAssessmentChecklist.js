const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const ItemSchema = new Schema({
    branch: {
        type: String,
    },
    inChargeName: {
        type: String,
    },
    area: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now
    },
    punctuality_q1: {
        type: String,
    },
    punctuality_q2: {
        type: String,
    },
    punctuality_q1_remarks: {
        type: String,
    },
    punctuality_q2_remarks: {
        type: String,
    },
    dress_code_q1: {
        type: String,
    },
    dress_code_q2: {
        type: String,
    },
    dress_code_q3: {
        type: String,
    },
    dress_code_q1_remarks: {
        type: String,
    },
    dress_code_q2_remarks: {
        type: String,
    },
    dress_code_q3_remarks: {
        type: String,
    },
    look_and_feel_q1: {
        type: String,
    },
    look_and_feel_q2: {
        type: String,
    },
    look_and_feel_q3: {
        type: String,
    },
    look_and_feel_q4: {
        type: String,
    },
    look_and_feel_q5: {
        type: String,
    },
    look_and_feel_q6: {
        type: String,
    },
    look_and_feel_q7: {
        type: String,
    },
    look_and_feel_q8: {
        type: String,
    },
    look_and_feel_q9: {
        type: String,
    },
    look_and_feel_q10: {
        type: String,
    },
    look_and_feel_q11: {
        type: String,
    },
    look_and_feel_q12: {
        type: String,
    },
    look_and_feel_q13: {
        type: String,
    },
    look_and_feel_q14: {
        type: String,
    },
    look_and_feel_q15: {
        type: String,
    },
    look_and_feel_q16: {
        type: String,
    },
    look_and_feel_q17: {
        type: String,
    },
    look_and_feel_q18: {
        type: String,
    },
    look_and_feel_q19: {
        type: String,
    },
    look_and_feel_q20: {
        type: String,
    },
    look_and_feel_q21: {
        type: String,
    },
    look_and_feel_q22: {
        type: String,
    },
    look_and_feel_q1_remarks: {
        type: String,
    },
    look_and_feel_q2_remarks: {
        type: String,
    },
    look_and_feel_q3_remarks: {
        type: String,
    },
    look_and_feel_q4_remarks: {
        type: String,
    },
    look_and_feel_q5_remarks: {
        type: String,
    },
    look_and_feel_q6_remarks: {
        type: String,
    },
    look_and_feel_q7_remarks: {
        type: String,
    },
    look_and_feel_q8_remarks: {
        type: String,
    },
    look_and_feel_q9_remarks: {
        type: String,
    },
    look_and_feel_q10_remarks: {
        type: String,
    },
    look_and_feel_q11_remarks: {
        type: String,
    },
    look_and_feel_q12_remarks: {
        type: String,
    },
    look_and_feel_q13_remarks: {
        type: String,
    },
    look_and_feel_q14_remarks: {
        type: String,
    },
    look_and_feel_q15_remarks: {
        type: String,
    },
    look_and_feel_q16_remarks: {
        type: String,
    },
    look_and_feel_q17_remarks: {
        type: String,
    },
    look_and_feel_q18_remarks: {
        type: String,
    },
    look_and_feel_q18_remarks: {
        type: String,
    },
    look_and_feel_q19_remarks: {
        type: String,
    },
    look_and_feel_q20_remarks: {
        type: String,
    },
    look_and_feel_q21_remarks: {
        type: String,
    },
    look_and_feel_q22_remarks: {
        type: String,
    },
    account_opening_q1: {
        type: String,
    },
    account_opening_q2: {
        type: String,
    },
    account_opening_q3: {
        type: String,
    },
    account_opening_q4: {
        type: String,
    },
    account_opening_q5: {
        type: String,
    },
    account_opening_q6: {
        type: String,
    },
    account_opening_q1_remarks: {
        type: String,
    },
    account_opening_q2_remarks: {
        type: String,
    },
    account_opening_q3_remarks: {
        type: String,
    },
    account_opening_q4_remarks: {
        type: String,
    },
    account_opening_q5_remarks: {
        type: String,
    },
    account_opening_q6_remarks: {
        type: String,
    },
    inward_clearing_q1: {
        type: String,
    },
    inward_clearing_q2: {
        type: String,
    },
    inward_clearing_q3: {
        type: String,
    },
    inward_clearing_q1_remarks: {
        type: String,
    },
    inward_clearing_q2_remarks: {
        type: String,
    },
    inward_clearing_q3_remarks: {
        type: String,
    },
    professional_environment_q1: {
        type: String,
    },
    professional_environment_q2: {
        type: String,
    },
    professional_environment_q3: {
        type: String,
    },
    professional_environment_q4: {
        type: String,
    },
    professional_environment_q5: {
        type: String,
    },
    professional_environment_q6: {
        type: String,
    },
    professional_environment_q7: {
        type: String,
    },
    professional_environment_q8: {
        type: String,
    },
    professional_environment_q9: {
        type: String,
    },
    professional_environment_q10: {
        type: String,
    },
    professional_environment_q1_remarks: {
        type: String,
    },
    professional_environment_q2_remarks: {
        type: String,
    },
    professional_environment_q3_remarks: {
        type: String,
    },
    professional_environment_q4_remarks: {
        type: String,
    },
    professional_environment_q5_remarks: {
        type: String,
    },
    professional_environment_q6_remarks: {
        type: String,
    },
    professional_environment_q7_remarks: {
        type: String,
    },
    professional_environment_q8_remarks: {
        type: String,
    },
    professional_environment_q9_remarks: {
        type: String,
    },
    professional_environment_q10_remarks: {
        type: String,
    },
    branch_stationary_q1: {
        type: String,
    },
    branch_stationary_q2: {
        type: String,
    },
    branch_stationary_q1_remarks: {
        type: String,
    },
    branch_stationary_q2_remarks: {
        type: String,
    },
    branch_security_q1: {
        type: String,
    },
    branch_security_q2: {
        type: String,
    },
    branch_security_q3: {
        type: String,
    },
    branch_security_q4: {
        type: String,
    },
    branch_security_q5: {
        type: String,
    },
    branch_security_q6: {
        type: String,
    },
    branch_security_q7: {
        type: String,
    },
    branch_security_q1_remarks: {
        type: String,
    },
    branch_security_q2_remarks: {
        type: String,
    },
    branch_security_q3_remarks: {
        type: String,
    },
    branch_security_q4_remarks: {
        type: String,
    },
    branch_security_q5_remarks: {
        type: String,
    },
    branch_security_q6_remarks: {
        type: String,
    },
    branch_security_q7_remarks: {
        type: String,
    },
    record_management_q1: {
        type: String,
    },
    record_management_q2: {
        type: String,
    },
    record_management_q3: {
        type: String,
    },
    record_management_q1_remarks: {
        type: String,
    },
    record_management_q2_remarks: {
        type: String,
    },
    record_management_q3_remarks: {
        type: String,
    },
    customer_complaints_q1: {
        type: String,
    },
    customer_complaints_q2: {
        type: String,
    },
    customer_complaints_q3: {
        type: String,
    },
    customer_complaints_q4: {
        type: String,
    },
    customer_complaints_q5: {
        type: String,
    },
    customer_complaints_q6: {
        type: String,
    },
    customer_complaints_q7: {
        type: String,
    },
    customer_complaints_q1_remarks: {
        type: String,
    },
    customer_complaints_q2_remarks: {
        type: String,
    },
    customer_complaints_q3_remarks: {
        type: String,
    },
    customer_complaints_q4_remarks: {
        type: String,
    },
    customer_complaints_q5_remarks: {
        type: String,
    },
    customer_complaints_q6_remarks: {
        type: String,
    },
    customer_complaints_q7_remarks: {
        type: String,
    },
    leading_process_q1: {
        type: String,
    },
    leading_process_q2: {
        type: String,
    },
    leading_process_q3: {
        type: String,
    },
    leading_process_q4: {
        type: String,
    },
    leading_process_q5: {
        type: String,
    },
    leading_process_q6: {
        type: String,
    },
    leading_process_q7: {
        type: String,
    },
    leading_process_q1_remarks: {
        type: String,
    },
    leading_process_q2_remarks: {
        type: String,
    },
    leading_process_q3_remarks: {
        type: String,
    },
    leading_process_q4_remarks: {
        type: String,
    },
    leading_process_q5_remarks: {
        type: String,
    },
    leading_process_q6_remarks: {
        type: String,
    },
    leading_process_q7_remarks: {
        type: String,
    },
    remarks: {
        type: String,
    },



},
    {
        collection: 'serviceQualityAnexD'

    });


module.exports = ServiceQualtiyAssessmentChecklist = mongoose.model('ServiceQualityAnexD', ItemSchema);