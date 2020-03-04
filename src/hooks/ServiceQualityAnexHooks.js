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
            console.log("errors", noErrors)
            if (noErrors) {
                console.log("authenticated!", inputs.location);
                const obj = {
                    location: payload.branchName,
                    hostName: payload.username,
                    cash_q1: inputs.cash_q1,
                    cash_q2: inputs.cash_q2,
                    cash_q3: inputs.cash_q3,
                    cash_q4: inputs.cash_q4,
                    remittance_q1: inputs.remittance_q1,
                    remittance_q2: inputs.remittance_q2,
                    clearing_q1: inputs.clearing_q1,
                    clearing_q1: inputs.clearing_q2,
                    clearing_q1: inputs.clearing_q3,
                    clearing_q1: inputs.clearing_q4,
                    clearing_q1: inputs.clearing_q5,
                    miscellaneous_q1: inputs.miscellaneous_q1,
                    miscellaneous_q2: inputs.miscellaneous_q2,
                    miscellaneous_q3: inputs.miscellaneous_q3,
                    miscellaneous_q4: inputs.miscellaneous_q4,
                    miscellaneous_q5: inputs.miscellaneous_q5,
                    miscellaneous_q6: inputs.miscellaneous_q6,
                    miscellaneous_q7: inputs.miscellaneous_q7,
                    miscellaneous_q8: inputs.miscellaneous_q8,
                    deposit_q1: inputs.deposit_q1,
                    deposit_q2: inputs.deposit_q2,
                    deposit_q3: inputs.deposit_q3,
                    deposit_q4: inputs.deposit_q4,
                    gold_loan_processing_new_q1: inputs.gold_loan_processing_new_q1,
                    gold_loan_processing_new_q2: inputs.gold_loan_processing_new_q2,
                    gold_loan_processing_new_q3: inputs.gold_loan_processing_new_q3,
                    gold_loan_processing_new_q4: inputs.gold_loan_processing_new_q4,
                    gold_loan_processing_new_q5: inputs.gold_loan_processing_new_q5,
                    gold_loan_processing_new_q6: inputs.gold_loan_processing_new_q6,
                    passbook_new_q1: inputs.passbook_new_q1,
                    passbook_new_q2: inputs.passbook_new_q2,
                    passbook_new_q3: inputs.passbook_new_q3,
                    passbook_new_q4: inputs.passbook_new_q4,
                    passbook_new_q5: inputs.passbook_new_q5,
                    passbook_new_q6: inputs.passbook_new_q6,
                    mortgage_new_q1: inputs.mortgage_new_q1,
                    mortgage_new_q2: inputs.mortgage_new_q2,
                    mortgage_new_q3: inputs.mortgage_new_q3,
                    mortgage_new_q4: inputs.mortgage_new_q4,
                    mortgage_new_q5: inputs.mortgage_new_q5,
                    mortgage_new_q6: inputs.mortgage_new_q6,
                    personal_new_q1: inputs.personal_new_q1,
                    personal_new_q2: inputs.personal_new_q2,
                    personal_new_q3: inputs.personal_new_q3,
                    personal_new_q4: inputs.personal_new_q4,
                    personal_new_q5: inputs.personal_new_q5,
                    personal_new_q6: inputs.personal_new_q6,
                    loan_new_q1: inputs.loan_new_q1,
                    loan_new_q2: inputs.loan_new_q2,
                    loan_new_q3: inputs.loan_new_q3,
                    loan_new_q4: inputs.loan_new_q4,
                    loan_new_q5: inputs.loan_new_q5,
                    loan_new_q6: inputs.loan_new_q6,

                    gold_loan_processing_repeat_q1: inputs.gold_loan_processing_repeat_q1,
                    gold_loan_processing_repeat_q2: inputs.gold_loan_processing_repeat_q2,
                    gold_loan_processing_repeat_q3: inputs.gold_loan_processing_repeat_q3,
                    gold_loan_processing_repeat_q4: inputs.gold_loan_processing_repeat_q4,
                    gold_loan_processing_repeat_q5: inputs.gold_loan_processing_repeat_q5,
                    gold_loan_processing_repeat_q6: inputs.gold_loan_processing_repeat_q6,
                    passbook_repeat_q1: inputs.passbook_repeat_q1,
                    passbook_repeat_q2: inputs.passbook_repeat_q2,
                    passbook_repeat_q3: inputs.passbook_repeat_q3,
                    passbook_repeat_q4: inputs.passbook_repeat_q4,
                    passbook_repeat_q5: inputs.passbook_repeat_q5,
                    passbook_repeat_q6: inputs.passbook_repeat_q6,
                    mortgage_repeat_q1: inputs.mortgage_repeat_q1,
                    mortgage_repeat_q2: inputs.mortgage_repeat_q2,
                    mortgage_repeat_q3: inputs.mortgage_repeat_q3,
                    mortgage_repeat_q4: inputs.mortgage_repeat_q4,
                    mortgage_repeat_q5: inputs.mortgage_repeat_q5,
                    mortgage_repeat_q6: inputs.mortgage_repeat_q6,
                    personal_repeat_q1: inputs.personal_repeat_q1,
                    personal_repeat_q2: inputs.personal_repeat_q2,
                    personal_repeat_q3: inputs.personal_repeat_q3,
                    personal_repeat_q4: inputs.personal_repeat_q4,
                    personal_repeat_q5: inputs.personal_repeat_q5,
                    personal_repeat_q6: inputs.personal_repeat_q6,
                    loan_repeat_q1: inputs.loan_repeat_q1,
                    loan_repeat_q2: inputs.loan_repeat_q2,
                    loan_repeat_q3: inputs.loan_repeat_q3,
                    loan_repeat_q4: inputs.loan_repeat_q4,
                    loan_repeat_q5: inputs.loan_repeat_q5,
                    loan_repeat_q6: inputs.loan_repeat_q6,

                };
                axios.post('http://localhost:5000/add/ServiceQualityAnexC', obj)
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
                console.log("not authenticated!", inputs);
                alert('Kindly fill complete form')
                setSubmitting(false);
            }
        }
        console.log("isSubmitting", inputs)
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