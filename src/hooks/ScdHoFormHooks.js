import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Session } from 'bc-react-session';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function useSignUpForm(initialState, validate) {
    const [inputs, setInputs] = React.useState(initialState);
    const [touched, setTouched] = React.useState(initialState);
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
                    hoLocation: payload.branchName,
                    hostName: payload.username,
                    floor_q1: inputs.floor_q1,
                    floor_q2: inputs.floor_q2,
                    floor_q3: inputs.floor_q3,
                    floor_q4: inputs.floor_q4,
                    floor_q5: inputs.floor_q5,
                    floor_q6: inputs.floor_q6,
                    floor_q7: inputs.floor_q7,
                    floor_q8: inputs.floor_q8,
                    floor_q9: inputs.floor_q9,
                    floor_q10: inputs.floor_q10,
                    floor_q11: inputs.floor_q11,
                    floor_q12: inputs.floor_q12,
                    floor_q13: inputs.floor_q13,
                    floor_q14: inputs.floor_q14,
                    floor_q15: inputs.floor_q15,
                    floor_q16: inputs.floor_q16,
                    staff_q1: inputs.staff_q1,
                    staff_q2: inputs.staff_q2,
                    staff_q3: inputs.staff_q3,
                    staff_q4: inputs.staff_q4,
                    staff_q5: inputs.staff_q5,
                    staff_q6: inputs.staff_q6,
                    staff_q7: inputs.staff_q7,
                    staff_q8: inputs.staff_q8,



                };
                axios.post('http://localhost:5000/add/ScdHo', obj)
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
        touched,
        isSubmitting,
        redirectTo
    };
}
export default useSignUpForm;