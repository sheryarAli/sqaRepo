import Page from 'components/Page';
import React, { useState, Fragment, Component } from 'react';
import useSignUpForm from 'hooks/ServiceQualityAssesmentChecklistHooks';
import validateAuthentication from 'hooks/validateServiceQualityAssessmentChecklist';
import classNames from 'classnames/bind';

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../styles/error_style.scss'
import { Redirect } from "react-router-dom";

const INITIAL_STATE = {
    branch: "",
    hostName: "",
    dated: "",
    punctuality_q1: "",
    punctuality_q2: "",
    punctuality_q1_remarks: "",
    punctuality_q2_remarks: "",
    dress_code_q1: "",
    dress_code_q2: "",
    dress_code_q3: "",
    dress_code_q1_remarks: "",
    dress_code_q2_remarks: "",
    dress_code_q3_remarks: "",
    look_and_feel_q1: "",
    look_and_feel_q2: "",
    look_and_feel_q3: "",
    look_and_feel_q4: "",
    look_and_feel_q5: "",
    look_and_feel_q6: "",
    look_and_feel_q7: "",
    look_and_feel_q8: "",
    look_and_feel_q9: "",
    look_and_feel_q10: "",
    look_and_feel_q11: "",
    look_and_feel_q12: "",
    look_and_feel_q13: "",
    look_and_feel_q14: "",
    look_and_feel_q15: "",
    look_and_feel_q16: "",
    look_and_feel_q17: "",
    look_and_feel_q18: "",
    look_and_feel_q19: "",
    look_and_feel_q20: "",
    look_and_feel_q21: "",
    look_and_feel_q22: "",
    look_and_feel_q1_remarks: "",
    look_and_feel_q2_remarks: "",
    look_and_feel_q3_remarks: "",
    look_and_feel_q4_remarks: "",
    look_and_feel_q5_remarks: "",
    look_and_feel_q6_remarks: "",
    look_and_feel_q7_remarks: "",
    look_and_feel_q8_remarks: "",
    look_and_feel_q9_remarks: "",
    look_and_feel_q10_remarks: "",
    look_and_feel_q11_remarks: "",
    look_and_feel_q12_remarks: "",
    look_and_feel_q13_remarks: "",
    look_and_feel_q14_remarks: "",
    look_and_feel_q15_remarks: "",
    look_and_feel_q16_remarks: "",
    look_and_feel_q17_remarks: "",
    look_and_feel_q18_remarks: "",
    look_and_feel_q19_remarks: "",
    look_and_feel_q20_remarks: "",
    look_and_feel_q21_remarks: "",
    look_and_feel_q22_remarks: "",


    customer_dealing_q1: "",
    customer_dealing_q2: "",
    customer_dealing_q3: "",
    customer_dealing_q4: "",
    customer_dealing_q5: "",
    customer_dealing_q6: "",
    customer_dealing_q7: "",
    customer_dealing_q8: "",
    customer_dealing_q9: "",
    customer_dealing_q10: "",
    customer_dealing_q11: "",
    customer_dealing_q12: "",
    customer_dealing_q13: "",
    customer_dealing_q14: "",
    customer_dealing_q15: "",
    customer_dealing_q16: "",
    customer_dealing_q17: "",
    customer_dealing_q18: "",
    customer_dealing_q19: "",
    customer_dealing_q20: "",
    customer_dealing_q21: "",
    customer_dealing_q22: "",
    customer_dealing_q23: "",


    customer_dealing_q1_remarks: "",
    customer_dealing_q2_remarks: "",
    customer_dealing_q3_remarks: "",
    customer_dealing_q4_remarks: "",
    customer_dealing_q5_remarks: "",
    customer_dealing_q6_remarks: "",
    customer_dealing_q7_remarks: "",
    customer_dealing_q8_remarks: "",
    customer_dealing_q9_remarks: "",
    customer_dealing_q10_remarks: "",
    customer_dealing_q11_remarks: "",
    customer_dealing_q12_remarks: "",
    customer_dealing_q13_remarks: "",
    customer_dealing_q14_remarks: "",
    customer_dealing_q15_remarks: "",
    customer_dealing_q16_remarks: "",
    customer_dealing_q17_remarks: "",
    customer_dealing_q18_remarks: "",
    customer_dealing_q19_remarks: "",
    customer_dealing_q20_remarks: "",
    customer_dealing_q21_remarks: "",
    customer_dealing_q22_remarks: "",
    customer_dealing_q23_remarks: "",






    account_opening_q1: "",
    account_opening_q2: "",
    account_opening_q3: "",
    account_opening_q4: "",
    account_opening_q5: "",
    account_opening_q6: "",
    account_opening_q1_remarks: "",
    account_opening_q2_remarks: "",
    account_opening_q3_remarks: "",
    account_opening_q4_remarks: "",
    account_opening_q5_remarks: "",
    account_opening_q6_remarks: "",
    inward_clearing_q1: "",
    inward_clearing_q2: "",
    inward_clearing_q3: "",
    inward_clearing_q1_remarks: "",
    inward_clearing_q2_remarks: "",
    inward_clearing_q3_remarks: "",
    professional_environment_q1: "",
    professional_environment_q2: "",
    professional_environment_q3: "",
    professional_environment_q4: "",
    professional_environment_q5: "",
    professional_environment_q6: "",
    professional_environment_q7: "",
    professional_environment_q8: "",
    professional_environment_q9: "",
    professional_environment_q10: "",
    professional_environment_q1_remarks: "",
    professional_environment_q2_remarks: "",
    professional_environment_q3_remarks: "",
    professional_environment_q4_remarks: "",
    professional_environment_q5_remarks: "",
    professional_environment_q6_remarks: "",
    professional_environment_q7_remarks: "",
    professional_environment_q8_remarks: "",
    professional_environment_q9_remarks: "",
    professional_environment_q10_remarks: "",
    branch_stationary_q1: "",
    branch_stationary_q2: "",
    branch_stationary_q1_remarks: "",
    branch_stationary_q2_remarks: "",
    branch_security_q1: "",
    branch_security_q2: "",
    branch_security_q3: "",
    branch_security_q4: "",
    branch_security_q5: "",
    branch_security_q6: "",
    branch_security_q7: "",
    branch_security_q1_remarks: "",
    branch_security_q2_remarks: "",
    branch_security_q3_remarks: "",
    branch_security_q4_remarks: "",
    branch_security_q5_remarks: "",
    branch_security_q6_remarks: "",
    branch_security_q7_remarks: "",
    record_management_q1: "",
    record_management_q2: "",
    record_management_q3: "",
    record_management_q1_remarks: "",
    record_management_q2_remarks: "",
    record_management_q3_remarks: "",
    customer_complaints_q1: "",
    customer_complaints_q2: "",
    customer_complaints_q3: "",
    customer_complaints_q4: "",
    customer_complaints_q5: "",
    customer_complaints_q6: "",
    customer_complaints_q7: "",
    customer_complaints_q1_remarks: "",
    customer_complaints_q2_remarks: "",
    customer_complaints_q3_remarks: "",
    customer_complaints_q4_remarks: "",
    customer_complaints_q5_remarks: "",
    customer_complaints_q6_remarks: "",
    customer_complaints_q7_remarks: "",
    leading_process_q1: "",
    leading_process_q2: "",
    leading_process_q3: "",
    leading_process_q4: "",
    leading_process_q5: "",
    leading_process_q6: "",
    leading_process_q7: "",
    leading_process_q1_remarks: "",
    leading_process_q2_remarks: "",
    leading_process_q3_remarks: "",
    leading_process_q4_remarks: "",
    leading_process_q5_remarks: "",
    leading_process_q6_remarks: "",
    leading_process_q7_remarks: "",
    remarks: "",
};



const FormPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formState, setFormState] = useState(1);
    const [text, setText] = useState("Next");

    const { inputs, handleInputChange, handleSubmit, errors, isSubmitting, redirectTo } = useSignUpForm(INITIAL_STATE, validateAuthentication);
    const step = formState[currentStep];
    const isLastStep = () => currentStep === 2;
    const isFirstStep = () => currentStep === 1;



    const handleChange = evt => {
        const { value } = evt.target;
        setFormState({
            ...formState,
            [currentStep]: { ...formState[currentStep], value }
        });
    };
    const goToHome = () => {
        if (redirectTo) {
            console.log("Redirect To Called")
            return <Redirect to='/' />
        }
    }


    const handleBackClick = evt => {
        evt.preventDefault();
        setCurrentStep(currentStep => currentStep - 1);
    };

    const handleNextClick = evt => {
        evt.preventDefault();
        setCurrentStep(currentStep => currentStep + 1);
    };



    const isLast = isLastStep();
    const isFirst = isFirstStep();




    return (
        <Fragment >
            {goToHome()}
            <Tabs id="controlled-tab-example" activeKey={currentStep} onSelect={{ handleChange }}  >
                {/* <Tab eventKey={1} title="HO Details">
                    <Page >
                        <Row>
                            <Col xl={12} lg={12} md={12}>
                                <Card>
                                    <CardHeader>Branch Details</CardHeader>
                                    <CardBody>
                                        <Form>
                                            <FormGroup row>
                                                <Label for="branch" sm={2} size="lg">Branch Name:</Label>
                                                <Col sm={5}>
                                                    <Input className={errors.
                                                        location && "mb-2"} bsSize="lg"
                                                        type="text"
                                                        onChange={handleInputChange}
                                                        value={inputs.branch}
                                                        name="branch"
                                                        required
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="inChargeName" sm={2} size="lg">BM /PB In-charge Name:</Label>
                                                <Col sm={5}>
                                                    <Input bsSize="lg"
                                                        type="text"
                                                        onChange={handleInputChange}
                                                        value={inputs.inChargeName}
                                                        name="inChargeName"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="area" sm={2} size="lg">Area:</Label>
                                                <Col sm={5}>
                                                    <Input bsSize="lg"
                                                        type="text"
                                                        onChange={handleInputChange}
                                                        value={inputs.area}
                                                        name="area"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="dated" sm={2} size="lg">Dated:</Label>
                                                <Col sm={5}>
                                                    <Input bsSize="lg"
                                                        type="text"
                                                        onChange={handleInputChange}
                                                        value={inputs.dated}
                                                        name="dated"
                                                    />
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Page>
                </Tab> */}
                <Tab eventKey={1} title="Assessment">
                    <Page >
                        <Card>
                            <CardHeader>Service Quality Checklist Assessment</CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <div className="row" style={{ marginTop: 20 }}>
                                        <div className="col-sm-1"></div>
                                        <div className="col-xs-12 col-md-12">
                                            <div className="card">
                                                <div className="card-header text-center">Service Quality Assessment Checklist</div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div  >
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">Quality Standards</th>
                                                                        <th className="column-middle" colspan="1" width="10%">Standard Meet=2, Standard Partially meet= 1, Standard Not meet=0, Standard Not applicable=N/A</th>
                                                                        <th className="column-middle" colspan="1">Remarks</th>
                                                                    </tr>


                                                                    {/* punctuality  question */}

                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" colspan="1">Branch staff punctuality and readiness for banking services</legend>
                                                                            </FormGroup>
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="punctuality_q1">Does all staff reach office before banking time and ready for all banking services at scheduled time?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.punctuality_q1}
                                                                                name="punctuality_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.punctuality_q1_remarks}
                                                                                name="punctuality_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="punctuality_q2" >Does staff mark their attendance on attendance register?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.punctuality_q2}
                                                                                name="punctuality_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.punctuality_q2_remarks}
                                                                                name="punctuality_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    {/* dress code questions */}





                                                                    <tr>
                                                                        <th>
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="label_dress_code"  >Staff Dress Code</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="dress_code">Is Proper Dress Code followed by all bank staff?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.dress_code_q1}
                                                                                name="dress_code_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.dress_code_q1_remarks}
                                                                                name="dress_code_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="dress_code" >Does Support staff ensure proper uniform?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.dress_code_q2}
                                                                                name="dress_code_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.dress_code_q2_remarks}
                                                                                name="dress_code_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>

                                                                                <Label for="dress_code" >All employees attired Employee ID card during banking hours?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.dress_code_q3}
                                                                                name="dress_code_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.dress_code_q3_remarks}
                                                                                name="dress_code_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    {/* Look and Feel Question */}




                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="label_look_and_feel"  >Look and Feel Of the branch/departments</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel">Are proper signage poster, hangings, signboard displayed and are in straight, clean & presentable form?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q1}
                                                                                name="look_and_feel_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q1_remarks}
                                                                                name="look_and_feel_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is sitting arrangement available for customer? Is it well organized, neat & clean?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q2}
                                                                                name="look_and_feel_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q2_remarks}
                                                                                name="look_and_feel_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Does staff sitting arrangement is well organized for optimal use of space while sparing ample space to client areas / client meeting rooms?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q3}
                                                                                name="look_and_feel_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q3_remarks}
                                                                                name="look_and_feel_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Does Staff desk  bear only relevant papers / documents and after office hours’ keep security documents under lock & key? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q4}
                                                                                name="look_and_feel_q4">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q4_remarks}
                                                                                name="look_and_feel_q4_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Does notice board displayed with all necessary information/notices as per regulatory requirements? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q5}
                                                                                name="look_and_feel_q5">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q5_remarks}
                                                                                name="look_and_feel_q5_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Does notice board contain obsolete/out dated information? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q6}
                                                                                name="look_and_feel_q6">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q6_remarks}
                                                                                name="look_and_feel_q6_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is unnecessary pasting of notices are made on walls and overcrowding the material in branch / unit? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q7}
                                                                                name="look_and_feel_q7">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q7_remarks}
                                                                                name="look_and_feel_q7_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are special notices displayed on counter  describing the responsibilities of clients? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q8}
                                                                                name="look_and_feel_q8">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>
                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q8_remarks}
                                                                                name="look_and_feel_q8_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Does SBP license properly framed and displaced at prominent place in branch / unit? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q9}
                                                                                name="look_and_feel_q9">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q9_remarks}
                                                                                name="look_and_feel_q9_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Does the Bank’s Vision, Mission & Core Values is displayed at decent place? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q10}
                                                                                name="look_and_feel_q10">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q10_remarks}
                                                                                name="look_and_feel_q10_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is Branch / office entrance covered with dust mats and parking area is organized & arranged well to give decent look? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q11}
                                                                                name="look_and_feel_q11" >
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>
                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q11_remarks}
                                                                                name="look_and_feel_q11_remarks" />

                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are there any broken glass, tiles, furniture & waste/obsolete items present in the branch/office?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q12}
                                                                                name="look_and_feel_q12">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q12_remarks}
                                                                                name="look_and_feel_q12_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are there any extra Furniture & Fixture items which can be transferred to other needy branch/department?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q13}
                                                                                name="look_and_feel_q13">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q13_remarks}
                                                                                name="look_and_feel_q13_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are Back up arrangement like UPS & Generator available in the branch & are in working condition with sufficient backup time?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q14}
                                                                                name="look_and_feel_q14">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q14_remarks}
                                                                                name="look_and_feel_q14_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is generator placed at a suitable distance from premises so that minimal disturbance be created due to its sound?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q15}
                                                                                name="look_and_feel_q15">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q15_remarks}
                                                                                name="look_and_feel_q15_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is cash Counter/Teller area clean & organized? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q16}
                                                                                name="look_and_feel_q16">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q16_remarks}
                                                                                name="look_and_feel_q16_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is restricted access notice board tagged at counter door/IT room? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q17}
                                                                                name="look_and_feel_q17">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q17_remarks}
                                                                                name="look_and_feel_q17_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is Premises floor as well as glass walls and ceiling neat and clean? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q18}
                                                                                name="look_and_feel_q18">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q18_remarks}
                                                                                name="look_and_feel_q18_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are plants placed in an appropriate manner and are in good condition with environment friendly look? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q19}
                                                                                name="look_and_feel_q19">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q19_remarks}
                                                                                name="look_and_feel_q19_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is Branch Clock is in accordance with Pakistan Standard Time ? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q20}
                                                                                name="look_and_feel_q20">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q20_remarks}
                                                                                name="look_and_feel_q20_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Toilets/ Kitchen are clean &have the facility of running tap water ?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q21}
                                                                                name="look_and_feel_q21">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q21_remarks}
                                                                                name="look_and_feel_q21_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are adequate lightening arrangement available in the branch?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q22}
                                                                                name="look_and_feel_q22">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.look_and_feel_q22_remarks}
                                                                                name="look_and_feel_q22_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    {/* Customer Dealing */}




                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="customer_dealing">Customer Dealing</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing">Is Clients entering the branch / PBs attended promptly and be directed to the concerned staff?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q1}
                                                                                name="customer_dealing_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q1_remarks}
                                                                                name="customer_dealing_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Does the staff attend phone calls promptly? With proper greeting and resolving customer queries in an efficient manner?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q2}
                                                                                name="customer_dealing_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>
                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q2_remarks}
                                                                                name="customer_dealing_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Does the staff involved in making false promises & providing incorrect information?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q3}
                                                                                name="customer_dealing_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q3_remarks}
                                                                                name="customer_dealing_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Does the branch staff possess adequate knowledge of bank products & sound enough to attend customer queries adequately? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q4}
                                                                                name="customer_dealing_q4">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q4_remarks}
                                                                                name="customer_dealing_q4_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Does notice board displayed with all necessary information/notices as per regulatory requirements? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q5}
                                                                                name="customer_dealing_q5">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q5_remarks}
                                                                                name="customer_dealing_q5_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Is behaviour of the staff pleasant/customer friendly?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q6}
                                                                                name="customer_dealing_q6">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q6_remarks}
                                                                                name="customer_dealing_q6_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Are the customers politely asked not to use mobile phones at counter/branch? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q7}
                                                                                name="customer_dealing_q7">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q7_remarks}
                                                                                name="customer_dealing_q7_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Is drinking water facility, wash room facility etc. available to customers? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q8}
                                                                                name="customer_dealing_q8">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q8_remarks}
                                                                                name="customer_dealing_q8_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Are senior citizens (Old age) given priority based on humanitarian grounds (separate counter if any)?  </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q9}
                                                                                name="customer_dealing_q9">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q9_remarks}
                                                                                name="customer_dealing_q9_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Is turn around time defined in the branch? And customer are dealt without any delay at counter/desk? What is Maximum time taken for dealing a customer taken by branch official?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q10}
                                                                                name="customer_dealing_q10">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q10_remarks}
                                                                                name="customer_dealing_q10_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Does Staff recovering the charges as per bank SOC and not take the benefit of ignorance of any customer? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q11}
                                                                                name="customer_dealing_q11">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q11_remarks}
                                                                                name="customer_dealing_q11_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Does proper disclosure of all facts are made to customers while selling banca/Third party Insurance products?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q12}
                                                                                name="customer_dealing_q12">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q12_remarks}
                                                                                name="customer_dealing_q12_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Is there any undue delay in dealing customer queries ? BM/BOM/BOI involved in the pertaining issue?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q13}
                                                                                name="customer_dealing_q13">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q13_remarks}
                                                                                name="customer_dealing_q13_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_dealing" >Issues raised out by internal/external auditors regarding customer services has addressed in timely manners?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q14}
                                                                                name="customer_dealing_q14">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q14_remarks}
                                                                                name="customer_dealing_q14_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are Back up arrangement like UPS & Generator available in the branch & are in working condition with sufficient backup time?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q15}
                                                                                name="customer_dealing_q15">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q15_remarks}
                                                                                name="customer_dealing_q15_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is generator placed at a suitable distance from premises so that minimal disturbance be created due to its sound?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q16}
                                                                                name="customer_dealing_q16">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q16_remarks}
                                                                                name="customer_dealing_q16_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is cash Counter/Teller area clean & organized? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q17}
                                                                                name="customer_dealing_q17">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q17_remarks}
                                                                                name="customer_dealing_q17_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is restricted access notice board tagged at counter door/IT room? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q18}
                                                                                name="customer_dealing_q18">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q18_reamarks}
                                                                                name="customer_dealing_q18_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is Premises floor as well as glass walls and ceiling neat and clean? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q19}
                                                                                name="customer_dealing_q19">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q19_remarks}
                                                                                name="customer_dealing_q19_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are plants placed in an appropriate manner and are in good condition with environment friendly look? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q20}
                                                                                name="customer_dealing_q20">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q20_remarks}
                                                                                name="customer_dealing_q20_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Is Branch Clock is in accordance with Pakistan Standard Time ? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q21}
                                                                                name="customer_dealing_q21">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q21_remarks}
                                                                                name="customer_dealing_q21_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Toilets/ Kitchen are clean &have the facility of running tap water ?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q22}
                                                                                name="customer_dealing_q22">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q22_remarks}
                                                                                name="customer_dealing_q22_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="look_and_feel" >Are adequate lightening arrangement available in the branch?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q23}
                                                                                name="customer_dealing_q23">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_dealing_q23_remarks}
                                                                                name="customer_dealing_q23_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    {/* Account Opening / Management */}





                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="account_opening">Account Opening / Management</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="account_opening">Is proper disclosure made to customer while opening a account regarding charges, fee, & both side obligations?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q1}
                                                                                name="account_opening_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q1_remarks}
                                                                                name="account_opening_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="account_opening" >Is Account Opening is dealt by senior staff ideally by branch Manager or operation In charge?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q2}
                                                                                name="account_opening_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q2_remarks}
                                                                                name="account_opening_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="account_opening" >Is Customer due diligence (CDD) or enhance due diligence (EDD) performed as per requirement?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q3}
                                                                                name="account_opening_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q3_remarks}
                                                                                name="account_opening_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="account_opening" >Does KYC form and input in the system is accurate and periodically reviewed?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q4}
                                                                                name="account_opening_q4">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q4_remarks}
                                                                                name="account_opening_q4_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="account_opening" >Does branch sending Statement of accounts to customers as per defined frequency? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q5}
                                                                                name="account_opening_q5">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q5_remarks}
                                                                                name="account_opening_q5_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="account_opening" >Is Cheque books delivered to customer within stipulated time?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q6}
                                                                                name="account_opening_q6">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.account_opening_q6_remarks}
                                                                                name="account_opening_q6_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>




                                                                    {/* Inward clearing/Outward clearing/Online transfer*/}




                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="inward_clearing">Inward  clearing / Outward Clearing / Online Transfer</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="inward_clearing">Does Staff checked all necessary details while accepting any Cheque for collection / clearing or request for online transfer to avoid any confusion and undue delay?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.inward_clearing_q1}
                                                                                name="inward_clearing_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.inward_clearing_q1_remarks}
                                                                                name="inward_clearing_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="inward_clearing" >Does clients are called and appraised in case of insufficient balance in case of inward returns?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.inward_clearing_q2}
                                                                                name="inward_clearing_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.inward_clearing_q2_remarks}
                                                                                name="inward_clearing_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="inward_clearing" >Are clients contacted in case of any uncollected return?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.inward_clearing_q3}
                                                                                name="inward_clearing_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.inward_clearing_q3_remarks}
                                                                                name="inward_clearing_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    {/* Professional Environment*/}


                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="professional_environment">Professional Environment</legend>
                                                                            </FormGroup>
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment">Does Staff checked all necessary details while accepting any Cheque for collection / clearing or request for online transfer to avoid any confusion and undue delay?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q1}
                                                                                name="professional_environment_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q1_remarks}
                                                                                name="professional_environment_q1_remarks" />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment" >Is there adequate staff (i.e. as per approved strength) posted at cash counter in order to provide efficient services to customers?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q2}
                                                                                name="professional_environment_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q2_remarks}
                                                                                name="professional_environment_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment"> Does the staff behave in orderly manner and don't use offensive language in branch? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q3}
                                                                                name="professional_environment_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q3_remarks}
                                                                                name="professional_environment_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment"> Do the staffs leave branch before banking time resulting in affecting customers’ service?  </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q4}
                                                                                name="professional_environment_q4">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q4_remarks}
                                                                                name="professional_environment_q4_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment"> Does the staff smoke in branch during working hours? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q5}
                                                                                name="professional_environment_q5">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q5_remarks}
                                                                                name="professional_environment_q5_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment"> Does the staff having there lunch on there seats? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q6}
                                                                                name="professional_environment_q6">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q6_remarks}
                                                                                name="professional_environment_q6_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment">Does the staff having there lunch on there seats? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q7}
                                                                                name="professional_environment_q7">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q7_remarks}
                                                                                name="professional_environment_q7_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment">Is Level of noise/ cross talk is minimum in the Banking Hall ? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q8}
                                                                                name="professional_environment_q8">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q8_remarks}
                                                                                name="professional_environment_q8_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment">Facial expression/ Voice tone/ Service attitude is always welcoming for the Customers. Does branch staff behave in such manner?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q9}
                                                                                name="professional_environment_q9">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q9_remarks}
                                                                                name="professional_environment_q9_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="professional_environment"> Does the staff leaves the counter frequently resulting in customers having to wait for long in the queue?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q10}
                                                                                name="professional_environment_q10">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.professional_environment_q10_remarks}
                                                                                name="professional_environment_q10_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    {/* Branch Stationary*/}



                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="branch_stationary">Branch Stationary</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_stationary">Is there adequate stationery (i.e. brochures/application form / AOFs/deposit slips etc. available on the desk/table provided for writing purposes)?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_stationary_q1}
                                                                                name="branch_stationary_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_stationary_q1_remarks}
                                                                                name="branch_stationary_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_stationary" >Is Security stationary kept under lock & key?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_stationary_q2}
                                                                                name="branch_stationary_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_stationary_q2_remarks}
                                                                                name="branch_stationary_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    {/* Branch Security*/}



                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="branch_security">Branch Security</legend>
                                                                            </FormGroup>
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_security">Are required number of security guard deployed at the branch?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q1}
                                                                                name="branch_security_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q1_remarks}
                                                                                name="branch_security_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_security" >Are required number of security guard deployed at the branch?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q2}
                                                                                name="branch_security_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q2_remarks}
                                                                                name="branch_security_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_security"> Are guards provided with weapon in a working condition with valid license? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q3}
                                                                                name="branch_security_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q3_remarks}
                                                                                name="branch_security_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_security"> CCTV, smoke detector, Fire extinguishers, Bugler alarms properly installed and in working condition? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q4}
                                                                                name="branch_security_q4">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q4_remarks}
                                                                                name="branch_security_q4_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_security"> CCTV DVR kept in concealed place? Staff have adequate knowledge to operate the same? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q5}
                                                                                name="branch_security_q5">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q5_remarks}
                                                                                name="branch_security_q5_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_security">Cash counter, strong room and IT/Server room restricted to authorized person only & remained locked?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q6}
                                                                                name="branch_security_q6">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q6_remarks}
                                                                                name="branch_security_q6_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="branch_security">Are there any combustible material were placed in the IT/ Server room? </Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.branch_security_q7}
                                                                                name="branch_security_q7">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.pbranch_security_q7_remarks}
                                                                                name="branch_security_q7_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>




                                                                    {/* Record Management*/}



                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="record_management">Record Management</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="record_management">Are records properly maintained by the branch?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.record_management_q1}
                                                                                name="record_management_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.record_management_q1_remarks}
                                                                                name="record_management_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="record_management" >Are files placed in a sequential order with proper tagging in a cabinet?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.record_management_q2}
                                                                                name="record_management_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.record_management_q2_remarks}
                                                                                name="record_management_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="record_management" >Are important record kept under lock & key?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.record_management_q3}
                                                                                name="record_management_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.record_management_q3_remarks}
                                                                                name="record_management_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    {/* Customer Complaints*/}


                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="customer_complaints">Customer Complaints</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_complaints">Are customers’ complaints timely resolved by Branch Manager /Branch Ops In-charge?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q1}
                                                                                name="customer_complaints_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q1_remarks}
                                                                                name="customer_complaints_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_complaints" >Is the Complaint box placed at an appropriate place easily assessable by the customers, Timely checked  and locked properly?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q2}
                                                                                name="customer_complaints_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q2_remarks}
                                                                                name="customer_complaints_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_complaints" >IS Customer Complaint/ Comment forms are placed at the Customer Area ?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q3}
                                                                                name="customer_complaints_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q3_remarks}
                                                                                name="customer_complaints_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_complaints" >Is the Complaint box placed at an appropriate place easily assessable by the customers, Timely checked  and locked properly?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q4}
                                                                                name="customer_complaints_q4">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q4_remarks}
                                                                                name="customer_complaints_q4_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_complaints" >Is extraordinary delay made in resolving customer complaints by branch staff?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q5}
                                                                                name="customer_complaints_q5">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q5_remarks}
                                                                                name="customer_complaints_q5_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_complaints" >Is there any case of unresolved complaints? If yes Document the same.</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q6}
                                                                                name="customer_complaints_q6">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q6_remarks}
                                                                                name="customer_complaints_q6_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="customer_complaints" >Is Complaint placard displayed at the branch at customer area?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q7}
                                                                                name="customer_complaints_q7">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.customer_complaints_q7_remarks}
                                                                                name="customer_complaints_q7_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>

                                                                    {/* Lending process  /Loan initiation / Approvals*/}


                                                                    <tr>
                                                                        <th >
                                                                            <FormGroup>
                                                                                <legend className="text-primary" for="leading_process">Lending process  /Loan initiation / Approvals</legend>
                                                                            </FormGroup>
                                                                        </th>

                                                                    </tr>

                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process">Is staff have adequate knowledge regarding lending process and guiding customer accurately?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q1}
                                                                                name="leading_process_q1">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q1_remarks}
                                                                                name="leading_process_q1_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process" >Does branch staff provides guidance to customer regarding Charges to be recovered from customer from disbursement of loan to its settlement?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q2}
                                                                                name="leading_process_q2">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q2_remarks}
                                                                                name="leading_process_q2_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process" >Does key terms and conditions, documents needed and collateral required clearly explained to customers?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q3}
                                                                                name="leading_process_q3">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q3_remarks}
                                                                                name="leading_process_q3_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process" >Does staff  explicitly explained the Service charge rate (APR), fee, other charges etc. to customers?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q4}
                                                                                name="leading_process_q4">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q4_remarks}
                                                                                name="leading_process_q4_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process" >Is any branch staff involved in unfair recovery of loans?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q5}
                                                                                name="leading_process_q5">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q5_remarks}
                                                                                name="leading_process_q5_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>


                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process" >Is follow up for Loan recovery are made as per ethical standards set in Credit Manuals?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q6}
                                                                                name="leading_process_q6">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q6_remarks}
                                                                                name="leading_process_q6_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>




                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process" >Is branch staff / recovery officer collecting charges as per SOC and excess charges are not recovered?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q7}
                                                                                name="leading_process_q7">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q7_remarks}
                                                                                name="leading_process_q7_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>



                                                                    <tr>
                                                                        <th className="column-middle" colspan="1">
                                                                            <FormGroup>
                                                                                <Label for="leading_process" >Is turnaround time for loan processing is observed or are there any cases where undue delay was noted?</Label>
                                                                            </FormGroup>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="select"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q8}
                                                                                name="leading_process_q8">
                                                                                <option value="">Select</option>
                                                                                <option value="2">2</option>
                                                                                <option value="1">1</option>
                                                                                <option value="0">0</option>
                                                                                <option value="N/A">N/A</option>

                                                                            </Input>
                                                                        </th>
                                                                        <th className="column-middle" colspan="1" >
                                                                            <Input bsSize="lg"
                                                                                type="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.leading_process_q8_remarks}
                                                                                name="leading_process_q8_remarks"
                                                                            />
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                            </table>
                                                            <table>
                                                                <thead>

                                                                    <tr>
                                                                        <FormGroup>
                                                                            <legend >Remarks/Comments</legend>
                                                                            <Input bsSize="lg"
                                                                                type="textarea"
                                                                                name="text"
                                                                                onChange={handleInputChange}
                                                                                value={inputs.remarks}
                                                                                name="remarks"
                                                                            />
                                                                        </FormGroup>
                                                                    </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button disabled={isSubmitting} type="submit">Submit</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Page>
                </Tab>

            </Tabs>
            {/* {!isFirst && <Button onClick={handleBackClick}>&lt; Back</Button>}
            {!isLast && <Button onClick={handleNextClick}>Next &gt;</Button>} */}


        </Fragment >
    );
};



export default FormPage;
