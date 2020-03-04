export default function validateAuthentication(values) {
    console.log('validateServiceQuality called');
    let errors = {}
    if (!values.cash_q1) {
        errors.cash_q1 = "Required HO Location"
    }
    if (!values.cash_q2) {
        errors.cash_q2 = "Required Host Department"
    }
    if (!values.cash_q3) {
        errors.cash_q3 = "Required HO Location"
    }
    if (!values.cash_q4) {
        errors.cash_q4 = "Required Host Department"
    }

    if (!values.remittance_q1) {
        errors.remittance_q1 = "Required HO Location"
    }
    if (!values.remittance_q2) {
        errors.remittance_q2 = "Required Host Department"
    }
    if (!values.clearing_q1) {
        errors.clearing_q1 = "Required HO Location"
    }
    if (!values.clearing_q2) {
        errors.clearing_q2 = "Required Host Department"
    }
    if (!values.clearing_q3) {
        errors.clearing_q3 = "Required HO Location"
    }
    if (!values.clearing_q4) {
        errors.clearing_q4 = "Required Host Department"
    }
    if (!values.clearing_q5) {
        errors.clearing_q5 = "Required Host Department"
    }


    if (!values.miscellaneous_q1) {
        errors.miscellaneous_q1 = "Required HO Location"
    }
    if (!values.miscellaneous_q2) {
        errors.miscellaneous_q2 = "Required Host Department"
    }
    if (!values.miscellaneous_q3) {
        errors.miscellaneous_q3 = "Required HO Location"
    }
    if (!values.miscellaneous_q4) {
        errors.miscellaneous_q4 = "Required Host Department"
    }
    if (!values.miscellaneous_q5) {
        errors.miscellaneous_q5 = "Required HO Location"
    }
    if (!values.miscellaneous_q6) {
        errors.miscellaneous_q6 = "Required Host Department"
    }
    if (!values.miscellaneous_q7) {
        errors.miscellaneous_q7 = "Required Host Department"
    }

    if (!values.miscellaneous_q8) {
        errors.miscellaneous_q8 = "Required Host Department"
    }


    if (!values.deposit_q1) {
        errors.deposit_q1 = "Required HO Location"
    }
    if (!values.deposit_q2) {
        errors.deposit_q2 = "Required Host Department"
    }
    if (!values.deposit_q3) {
        errors.deposit_q3 = "Required HO Location"
    }
    if (!values.deposit_q4) {
        errors.deposit_q4 = "Required Host Department"
    }



    if (!values.gold_loan_processing_new_q1) {
        errors.gold_loan_processing_new_q1 = "Required HO Location"
    }
    if (!values.gold_loan_processing_new_q2) {
        errors.gold_loan_processing_new_q2 = "Required Host Department"
    }
    if (!values.gold_loan_processing_new_q3) {
        errors.gold_loan_processing_new_q3 = "Required HO Location"
    }
    if (!values.gold_loan_processing_new_q4) {
        errors.gold_loan_processing_new_q4 = "Required Host Department"
    }
    if (!values.gold_loan_processing_new_q5) {
        errors.gold_loan_processing_new_q5 = "Required Host Department"
    }
    if (!values.gold_loan_processing_new_q6) {
        errors.gold_loan_processing_new_q6 = "Required Host Department"
    }


    if (!values.passbook_new_q1) {
        errors.passbook_new_q1 = "Required HO Location"
    }
    if (!values.passbook_new_q2) {
        errors.passbook_new_q2 = "Required Host Department"
    }
    if (!values.passbook_new_q3) {
        errors.passbook_new_q3 = "Required HO Location"
    }
    if (!values.passbook_new_q4) {
        errors.passbook_new_q4 = "Required Host Department"
    }
    if (!values.passbook_new_q5) {
        errors.passbook_new_q5 = "Required Host Department"
    }
    if (!values.passbook_new_q6) {
        errors.passbook_new_q6 = "Required Host Department"
    }



    if (!values.mortgage_new_q1) {
        errors.mortgage_new_q1 = "Required HO Location"
    }
    if (!values.mortgage_new_q2) {
        errors.mortgage_new_q2 = "Required Host Department"
    }
    if (!values.mortgage_new_q3) {
        errors.mortgage_new_q3 = "Required HO Location"
    }
    if (!values.mortgage_new_q4) {
        errors.mortgage_new_q4 = "Required Host Department"
    }
    if (!values.mortgage_new_q5) {
        errors.mortgage_new_q5 = "Required Host Department"
    }
    if (!values.mortgage_new_q6) {
        errors.mortgage_new_q6 = "Required Host Department"
    }




    if (!values.personal_new_q1) {
        errors.personal_new_q1 = "Required HO Location"
    }
    if (!values.personal_new_q2) {
        errors.personal_new_q2 = "Required Host Department"
    }
    if (!values.personal_new_q3) {
        errors.personal_new_q3 = "Required HO Location"
    }
    if (!values.personal_new_q4) {
        errors.personal_new_q4 = "Required Host Department"
    }
    if (!values.personal_new_q5) {
        errors.personal_new_q5 = "Required Host Department"
    }
    if (!values.personal_new_q6) {
        errors.personal_new_q6 = "Required Host Department"
    }


    if (!values.loan_new_q1) {
        errors.loan_new_q1 = "Required HO Location"
    }
    if (!values.loan_new_q2) {
        errors.loan_new_q2 = "Required Host Department"
    }
    if (!values.loan_new_q3) {
        errors.loan_new_q3 = "Required HO Location"
    }
    if (!values.loan_new_q4) {
        errors.loan_new_q4 = "Required Host Department"
    }
    if (!values.loan_new_q5) {
        errors.loan_new_q5 = "Required Host Department"
    }
    if (!values.loan_new_q6) {
        errors.loan_new_q6 = "Required Host Department"
    }



    if (!values.gold_loan_processing_repeat_q1) {
        errors.gold_loan_processing_repeat_q1 = "Required HO Location"
    }
    if (!values.gold_loan_processing_repeat_q2) {
        errors.gold_loan_processing_repeat_q2 = "Required Host Department"
    }
    if (!values.gold_loan_processing_repeat_q3) {
        errors.gold_loan_processing_repeat_q3 = "Required HO Location"
    }
    if (!values.gold_loan_processing_repeat_q4) {
        errors.gold_loan_processing_repeat_q4 = "Required Host Department"
    }
    if (!values.gold_loan_processing_repeat_q5) {
        errors.gold_loan_processing_repeat_q5 = "Required Host Department"
    }
    if (!values.gold_loan_processing_repeat_q6) {
        errors.gold_loan_processing_repeat_q6 = "Required Host Department"
    }




    if (!values.passbook_repeat_q1) {
        errors.passbook_repeat_q1 = "Required HO Location"
    }
    if (!values.passbook_repeat_q2) {
        errors.passbook_repeat_q2 = "Required Host Department"
    }
    if (!values.passbook_repeat_q3) {
        errors.passbook_repeat_q3 = "Required HO Location"
    }
    if (!values.passbook_repeat_q4) {
        errors.passbook_repeat_q4 = "Required Host Department"
    }
    if (!values.passbook_repeat_q5) {
        errors.passbook_repeat_q5 = "Required Host Department"
    }
    if (!values.passbook_repeat_q6) {
        errors.passbook_repeat_q6 = "Required Host Department"
    }




    if (!values.mortgage_repeat_q1) {
        errors.mortgage_repeat_q1 = "Required HO Location"
    }
    if (!values.mortgage_repeat_q2) {
        errors.mortgage_repeat_q2 = "Required Host Department"
    }
    if (!values.mortgage_repeat_q3) {
        errors.mortgage_repeat_q3 = "Required HO Location"
    }
    if (!values.mortgage_repeat_q4) {
        errors.mortgage_repeat_q4 = "Required Host Department"
    }
    if (!values.mortgage_repeat_q5) {
        errors.mortgage_repeat_q5 = "Required Host Department"
    }
    if (!values.mortgage_repeat_q6) {
        errors.mortgage_repeat_q6 = "Required Host Department"
    }



    if (!values.loan_repeat_q1) {
        errors.loan_repeat_q1 = "Required HO Location"
    }
    if (!values.loan_repeat_q2) {
        errors.loan_repeat_q2 = "Required Host Department"
    }
    if (!values.loan_repeat_q3) {
        errors.loan_repeat_q3 = "Required HO Location"
    }
    if (!values.loan_repeat_q4) {
        errors.loan_repeat_q4 = "Required Host Department"
    }
    if (!values.loan_repeat_q5) {
        errors.loan_repeat_q5 = "Required Host Department"
    }
    if (!values.loan_repeat_q6) {
        errors.loan_repeat_q6 = "Required Host Department"
    }



    return errors;
}