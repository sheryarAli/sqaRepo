export default function validateAuthentication(values) {
    console.log('validateAuthentication called');
    let errors = {}
    // if (!values.branch) {
    //     errors.branch = "Required HO Location"
    //     console.log('hoLocation error')
    // }
    // if (!values.inChargeName) {
    //     errors.inChargeName = "Required Host Name"
    // }

    // if (!values.area) {
    //     errors.area = "Required HO Location"
    //     console.log('hoLocation error')
    // }
    // if (!values.dated) {
    //     errors.dated = "Required Host Name"
    // }

    if (values.punctuality_q1 == "") {
        errors.punctuality_q1 = "Required Date"
    }
    if (values.punctuality_q2 == "") {
        errors.punctuality_q2 = "Required Date"
    }


    if (!values.punctuality_q1_remarks) {
        errors.punctuality_q1_remarks = "Required Date"
    }
    if (!values.punctuality_q2_remarks) {
        errors.punctuality_q2_remarks = "Required Date"
    }


    if (values.dress_code_q1 == "") {
        errors.dress_code_q1 = "Required Date"
    }
    if (values.dress_code_q2 == "") {
        errors.dress_code_q2 = "Required Date"
    }
    if (values.dress_code_q3 == "") {
        errors.dress_code_q3 = "Required Date"
    }


    if (!values.dress_code_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.dress_code_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.dress_code_q3_remarks) {
        errors.dated = "Required Date"
    }


    if (values.look_and_feel_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q6 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q7 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q8 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q9 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q10 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q11 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q12 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q13 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q14 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q15 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q16 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q17 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q18 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q19 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q20 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q21 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q22 == "") {
        errors.dated = "Required Date"
    }


    if (values.look_and_feel_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q6 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q7 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q8 == "") {
        errors.date = "Required Date"
    }
    if (values.look_and_feel_q9 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q10 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q11 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q12 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q13 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q14 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q15 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q16 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q17 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q18 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q19 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q20 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q21 == "") {
        errors.dated = "Required Date"
    }
    if (values.look_and_feel_q22 == "") {
        errors.dated = "Required Date"
    }




    if (!values.look_and_feel_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q3_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q4_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q5_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q6_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q7_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q8_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q9_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q10_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q11_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q12_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q13_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q14_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q15_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q16_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q17_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q18_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q19_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q20_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q21_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.look_and_feel_q22_remarks) {
        errors.dated = "Required Date"
    }




    if (values.customer_dealing_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q6 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q7 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q8 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q9 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q10 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q11 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q12 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q13 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q14 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q15 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q16 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q17 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q18 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q19 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q20 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q21 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q22 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_dealing_q23 == "") {
        errors.dated = "Required Date"
    }




    if (!values.customer_dealing_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q3_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q4_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q5_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q6_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q7_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q8_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q9_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q10_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q11_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q12_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q13_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q14_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q15_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q16_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q17_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q18_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q19_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q20_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q21_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q22_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_dealing_q23_remarks) {
        errors.dated = "Required Date"
    }










    if (values.account_opening_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.account_opening_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.account_opening_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.account_opening_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.account_opening_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.account_opening_q6 == "") {
        errors.dated = "Required Date"
    }


    if (!values.account_opening_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.account_opening_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.account_opening_q3_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.account_opening_q4_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.account_opening_q5_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.account_opening_q6_remarks) {
        errors.dated = "Required Date"
    }


    if (values.inward_clearing_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.inward_clearing_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.inward_clearing_q3 == "") {
        errors.dated = "Required Date"
    }


    if (!values.inward_clearing_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.inward_clearing_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.inward_clearing_q3_remarks) {
        errors.dated = "Required Date"
    }


    if (values.professional_environment_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q6 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q7 == "") {
        errors.dated = "Required Date"
    }

    if (values.professional_environment_q8 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q9 == "") {
        errors.dated = "Required Date"
    }
    if (values.professional_environment_q10 == "") {
        errors.dated = "Required Date"
    }




    if (!values.professional_environment_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q3_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q4_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q5_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q6_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q7_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q8_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q9_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.professional_environment_q10_remarks) {
        errors.dated = "Required Date"
    }


    if (values.branch_stationary_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.branch_stationary_q2 == "") {
        errors.dated = "Required Date"
    }




    if (!values.branch_stationary_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.branch_stationary_q2_remarks) {
        errors.dated = "Required Date"
    }



    if (values.branch_security_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.branch_security_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.branch_security_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.branch_security_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.branch_security_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.branch_security_q6 == "") {
        errors.dated = "Required Date"
    }
    if (values.branch_security_q7 == "") {
        errors.dated = "Required Date"
    }



    if (!values.branch_security_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.branch_security_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.branch_security_q3_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.branch_security_q4_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.branch_security_q5_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.branch_security_q6_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.branch_security_q7_remarks) {
        errors.dated = "Required Date"
    }


  

    if (values.record_management_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.record_management_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.record_management_q3 == "") {
        errors.dated = "Required Date"
    }

    if (!values.record_management_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.record_management_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.record_management_q3_remarks) {
        errors.dated = "Required Date"
    }


    if (values.customer_complaints_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_complaints_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_complaints_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_complaints_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_complaints_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_complaints_q6 == "") {
        errors.dated = "Required Date"
    }
    if (values.customer_complaints_q7 == "") {
        errors.dated = "Required Date"
    }


    if (!values.customer_complaints_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_complaints_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_complaints_q3_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_complaints_q4_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_complaints_q5_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_complaints_q6_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.customer_complaints_q7_remarks) {
        errors.dated = "Required Date"
    }


    if (values.leading_process_q1 == "") {
        errors.dated = "Required Date"
    }
    if (values.leading_process_q2 == "") {
        errors.dated = "Required Date"
    }
    if (values.leading_process_q3 == "") {
        errors.dated = "Required Date"
    }
    if (values.leading_process_q4 == "") {
        errors.dated = "Required Date"
    }
    if (values.leading_process_q5 == "") {
        errors.dated = "Required Date"
    }
    if (values.leading_process_q6 == "") {
        errors.dated = "Required Date"
    }
    if (values.leading_process_q7 == "") {
        errors.dated = "Required Date"
    }



    if (!values.leading_process_q1_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.leading_process_q2_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.leading_process_q3_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.leading_process_q4_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.leading_process_q5_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.leading_process_q6_remarks) {
        errors.dated = "Required Date"
    }
    if (!values.leading_process_q7_remarks) {
        errors.dated = "Required Date"
    }

    if (!values.remarks) {
        errors.dated = "Required Date"
    }

    return errors;
}