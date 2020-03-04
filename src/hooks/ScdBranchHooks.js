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
                console.log("authenticated!", inputs.hoLocation, inputs.hostName);
                const obj = {
                    branchLocation: payload.branchName,
                    hostName: payload.username,
                    security_q1: inputs.security_q1,
                    security_q2: inputs.security_q2,
                    securtiy_q3: inputs.securtiy_q3,
                    exterior_q1: inputs.exterior_q1,
                    exterior_q2: inputs.exterior_q2,
                    exterior_q3: inputs.exterior_q3,
                    exterior_q4: inputs.exterior_q4,
                    exterior_q5: inputs.exterior_q5,
                    hall_q1: inputs.hall_q1,
                    hall_q2: inputs.hall_q2,
                    hall_q3: inputs.hall_q3,
                    hall_q4: inputs.hall_q4,
                    hall_q5: inputs.hall_q5,
                    hall_q6: inputs.hall_q6,
                    hall_q7: inputs.hall_q7,
                    hall_q8: inputs.hall_q8,
                    hall_q9: inputs.hall_q9,
                    hall_q10: inputs.hall_q10,
                    hall_q11: inputs.hall_q11,
                    hall_q12: inputs.hall_q12,
                    hall_q13: inputs.hall_q13,
                    hall_q13: inputs.hall_q13,
                    branch_q1: inputs.branch_q1,
                    branch_q2: inputs.branch_q2,
                    branch_q3: inputs.branch_q3,
                    branch_q4: inputs.branch_q4,
                    branch_q5: inputs.branch_q5,
                    branch_q6: inputs.branch_q6,
                    atm_q1: inputs.atm_q1,
                    atm_q2: inputs.atm_q2,
                    atm_q3: inputs.atm_q3,
                    atm_q4: inputs.atm_q4,
                    atm_q5: inputs.atm_q5,
                    atm_q6: inputs.atm_q6,
                    atm_q8: inputs.atm_q8,
                    atm_q9: inputs.atm_q9,
                    atm_q10: inputs.atm_q10,
                    atm_q11: inputs.atm_q11,
                    systems_q1: inputs.systems_q1,
                    systems_q2: inputs.systems_q2,
                };
                axios.post('http://localhost:5000/add/ScdBranch', obj)
                    .then(res => {
                        console.log(res.data);
                        setSubmitting(false);
                        goToHome();
                    })
                    .catch(error => {
                        console.log(error.response)
                    });
            } else {
                alert("Kindly fill complete form");
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