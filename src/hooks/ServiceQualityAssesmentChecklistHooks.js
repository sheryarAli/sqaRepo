import React, { useState } from 'react';
import axios from 'axios';
import { Session } from 'bc-react-session';

function useSignUpForm(initialState, validate) {
    const [inputs, setInputs] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);
    const apiUrl = "http://localhost:3000/api/v1/form1";
    const session = Session.get();
    const { payload } = Session.get();
    const [redirectTo, setRedirectTo] = React.useState(false);


    React.useEffect(() => {
        console.log("useEffect Called!");
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            console.log("errors length", Object.keys(errors).length === 0)
            console.log("errors", noErrors)
            if (noErrors) {
                console.log("authenticated!", inputs.location);
                const obj = {
                    branch: payload.branchName,
                    hostName: inputs.inChargeName,
                    punctuality_q1: inputs.punctuality_q1,
                    punctuality_q2: inputs.punctuality_q2,
                    punctuality_q1_remarks: inputs.punctuality_q1_remarks,
                    punctuality_q2_remarks: inputs.punctuality_q2_remarks,
                    dress_code_q1: inputs.dress_code_q1,
                    dress_code_q2: inputs.dress_code_q2,
                    dress_code_q3: inputs.dress_code_q3,
                    dress_code_q1_remarks: inputs.dress_code_q1_remarks,
                    dress_code_q2_remarks: inputs.dress_code_q2_remarks,
                    dress_code_q3_remarks: inputs.dress_code_q3_remarks,
                    look_and_feel_q1: inputs.look_and_feel_q1,
                    look_and_feel_q2: inputs.look_and_feel_q2,
                    look_and_feel_q3: inputs.look_and_feel_q3,
                    look_and_feel_q4: inputs.look_and_feel_q4,
                    look_and_feel_q5: inputs.look_and_feel_q5,
                    look_and_feel_q6: inputs.look_and_feel_q6,
                    look_and_feel_q7: inputs.look_and_feel_q7,
                    look_and_feel_q8: inputs.look_and_feel_q8,
                    look_and_feel_q9: inputs.look_and_feel_q9,
                    look_and_feel_q10: inputs.look_and_feel_q10,
                    look_and_feel_q11: inputs.look_and_feel_q11,
                    look_and_feel_q12: inputs.look_and_feel_q12,
                    look_and_feel_q13: inputs.look_and_feel_q13,
                    look_and_feel_q14: inputs.look_and_feel_q14,
                    look_and_feel_q15: inputs.look_and_feel_q15,
                    look_and_feel_q16: inputs.look_and_feel_q16,
                    look_and_feel_q17: inputs.look_and_feel_q17,
                    look_and_feel_q18: inputs.look_and_feel_q18,
                    look_and_feel_q19: inputs.look_and_feel_q19,
                    look_and_feel_q20: inputs.look_and_feel_q20,
                    look_and_feel_q21: inputs.look_and_feel_q21,
                    look_and_feel_q22: inputs.look_and_feel_q22,
                    look_and_feel_q1_remarks: inputs.look_and_feel_q1_remarks,
                    look_and_feel_q2_remarks: inputs.look_and_feel_q2_remarks,
                    look_and_feel_q3_remarks: inputs.look_and_feel_q3_remarks,
                    look_and_feel_q4_remarks: inputs.look_and_feel_q4_remarks,
                    look_and_feel_q5_remarks: inputs.look_and_feel_q5_remarks,
                    look_and_feel_q6_remarks: inputs.look_and_feel_q6_remarks,
                    look_and_feel_q7_remarks: inputs.look_and_feel_q7_remarks,
                    look_and_feel_q8_remarks: inputs.look_and_feel_q8_remarks,
                    look_and_feel_q9_remarks: inputs.look_and_feel_q9_remarks,
                    look_and_feel_q10_remarks: inputs.look_and_feel_q10_remarks,
                    look_and_feel_q11_remarks: inputs.look_and_feel_q11_remarks,
                    look_and_feel_q12_remarks: inputs.look_and_feel_q12_remarks,
                    look_and_feel_q13_remarks: inputs.look_and_feel_q13_remarks,
                    look_and_feel_q14_remarks: inputs.look_and_feel_q14_remarks,
                    look_and_feel_q15_remarks: inputs.look_and_feel_q15_remarks,
                    look_and_feel_q16_remarks: inputs.look_and_feel_q16_remarks,
                    look_and_feel_q17_remarks: inputs.look_and_feel_q17_remarks,
                    look_and_feel_q18_remarks: inputs.look_and_feel_q18_remarks,
                    look_and_feel_q19_remarks: inputs.look_and_feel_q19_remarks,
                    look_and_feel_q20_remarks: inputs.look_and_feel_q20_remarks,
                    look_and_feel_q21_remarks: inputs.look_and_feel_q21_remarks,
                    look_and_feel_q22_remarks: inputs.look_and_feel_q22_remarks,
                    account_opening_q1: inputs.account_opening_q1,
                    account_opening_q2: inputs.account_opening_q2,
                    account_opening_q3: inputs.account_opening_q3,
                    account_opening_q4: inputs.account_opening_q4,
                    account_opening_q5: inputs.account_opening_q5,
                    account_opening_q6: inputs.account_opening_q6,
                    account_opening_q1_remarks: inputs.account_opening_q1_remarks,
                    account_opening_q2_remarks: inputs.account_opening_q2_remarks,
                    account_opening_q3_remarks: inputs.account_opening_q3_remarks,
                    account_opening_q4_remarks: inputs.account_opening_q4_remarks,
                    account_opening_q5_remarks: inputs.account_opening_q5_remarks,
                    account_opening_q6_remarks: inputs.account_opening_q6_remarks,
                    inward_clearing_q1: inputs.inward_clearing_q1,
                    inward_clearing_q2: inputs.inward_clearing_q2,
                    inward_clearing_q3: inputs.inward_clearing_q3,
                    inward_clearing_q1_remarks: inputs.inward_clearing_q1_remarks,
                    inward_clearing_q2_remarks: inputs.inward_clearing_q2_remarks,
                    inward_clearing_q3_remarks: inputs.inward_clearing_q3_remarks,
                    professional_environment_q1: inputs.professional_environment_q1,
                    professional_environment_q2: inputs.professional_environment_q2,
                    professional_environment_q3: inputs.professional_environment_q3,
                    professional_environment_q4: inputs.professional_environment_q4,
                    professional_environment_q5: inputs.professional_environment_q5,
                    professional_environment_q6: inputs.professional_environment_q6,
                    professional_environment_q7: inputs.professional_environment_q7,
                    professional_environment_q8: inputs.professional_environment_q8,
                    professional_environment_q9: inputs.professional_environment_q9,
                    professional_environment_q10: inputs.professional_environment_q10,
                    professional_environment_q1_remarks: inputs.professional_environment_q1_remarks,
                    professional_environment_q2_remarks: inputs.professional_environment_q2_remarks,
                    professional_environment_q3_remarks: inputs.professional_environment_q3_remarks,
                    professional_environment_q4_remarks: inputs.professional_environment_q4_remarks,
                    professional_environment_q5_remarks: inputs.professional_environment_q5_remarks,
                    professional_environment_q6_remarks: inputs.professional_environment_q6_remarks,
                    professional_environment_q7_remarks: inputs.professional_environment_q7_remarks,
                    professional_environment_q8_remarks: inputs.professional_environment_q8_remarks,
                    professional_environment_q9_remarks: inputs.professional_environment_q9_remarks,
                    professional_environment_q10_remarks: inputs.professional_environment_q10_remarks,
                    branch_stationary_q1: inputs.branch_stationary_q1,
                    branch_stationary_q2: inputs.branch_stationary_q2,
                    branch_stationary_q1_remarks: inputs.branch_stationary_q1_remarks,
                    branch_stationary_q2_remarks: inputs.branch_stationary_q2_remarks,
                    branch_security_q1: inputs.branch_security_q1,
                    branch_security_q2: inputs.branch_security_q2,
                    branch_security_q3: inputs.branch_security_q3,
                    branch_security_q4: inputs.branch_security_q4,
                    branch_security_q5: inputs.branch_security_q5,
                    branch_security_q6: inputs.branch_security_q6,
                    branch_security_q7: inputs.branch_security_q7,
                    branch_security_q1_remarks: inputs.branch_security_q1_remarks,
                    branch_security_q2_remarks: inputs.branch_security_q2_remarks,
                    branch_security_q3_remarks: inputs.branch_security_q3_remarks,
                    branch_security_q4_remarks: inputs.branch_security_q4_remarks,
                    branch_security_q5_remarks: inputs.branch_security_q5_remarks,
                    branch_security_q6_remarks: inputs.branch_security_q6_remarks,
                    branch_security_q7_remarks: inputs.branch_security_q7_remarks,
                    record_management_q1: inputs.record_management_q1,
                    record_management_q2: inputs.record_management_q2,
                    record_management_q3: inputs.record_management_q3,
                    record_management_q1_remarks: inputs.record_management_q1_remarks,
                    record_management_q2_remarks: inputs.record_management_q2_remarks,
                    record_management_q3_remarks: inputs.record_management_q3_remarks,
                    customer_complaints_q1: inputs.customer_complaints_q1,
                    customer_complaints_q2: inputs.customer_complaints_q2,
                    customer_complaints_q3: inputs.customer_complaints_q3,
                    customer_complaints_q4: inputs.customer_complaints_q4,
                    customer_complaints_q5: inputs.customer_complaints_q5,
                    customer_complaints_q6: inputs.customer_complaints_q6,
                    customer_complaints_q7: inputs.customer_complaints_q7,
                    customer_complaints_q1_remarks: inputs.customer_complaints_q1_remarks,
                    customer_complaints_q2_remarks: inputs.customer_complaints_q2_remarks,
                    customer_complaints_q3_remarks: inputs.customer_complaints_q3_remarks,
                    customer_complaints_q4_remarks: inputs.customer_complaints_q4_remarks,
                    customer_complaints_q5_remarks: inputs.customer_complaints_q5_remarks,
                    customer_complaints_q6_remarks: inputs.customer_complaints_q6_remarks,
                    customer_complaints_q7_remarks: inputs.customer_complaints_q7_remarks,
                    leading_process_q1: inputs.leading_process_q1,
                    leading_process_q2: inputs.leading_process_q2,
                    leading_process_q3: inputs.leading_process_q3,
                    leading_process_q4: inputs.leading_process_q4,
                    leading_process_q5: inputs.leading_process_q5,
                    leading_process_q6: inputs.leading_process_q6,
                    leading_process_q7: inputs.leading_process_q7,
                    leading_process_q1_remarks: inputs.leading_process_q1_remarks,
                    leading_process_q2_remarks: inputs.leading_process_q2_remarks,
                    leading_process_q3_remarks: inputs.leading_process_q3_remarks,
                    leading_process_q4_remarks: inputs.leading_process_q4_remarks,
                    leading_process_q5_remarks: inputs.leading_process_q5_remarks,
                    leading_process_q6_remarks: inputs.leading_process_q6_remarks,
                    leading_process_q7_remarks: inputs.leading_process_q7_remarks,
                    remarks: inputs.remarks,
                };
                axios.post('http://localhost:5000/add/ServiceQualityChecklistForm', obj)
                    .then(res => {
                        console.log("form submit data" + res.data);
                        console.log('form submitted');
                        setSubmitting(false);
                        goToHome();
                    })
                    .catch(error => {
                        console.log(error.response)
                    });
            } else {
                alert('Kindly fill complete form')
                setSubmitting(false);
            }
        }
        console.log("isSubmitting", isSubmitting)
    }, [errors]);


    const goToHome = () => {
        setRedirectTo(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle Submit Called", inputs)
        const validationErrors = validate(inputs);
        setErrors(validationErrors);
        setSubmitting(true);
    }

    const handleInputChange = (event) => {
        console.log("handle input change", event.target.value);
        setInputs(({ ...inputs, [event.target.name]: event.target.value }));
    }



    return {
        handleSubmit,
        handleInputChange,
        inputs,
        errors,
        isSubmitting,
        redirectTo
    };
}
export default useSignUpForm;