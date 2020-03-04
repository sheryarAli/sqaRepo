import Page from 'components/Page';
import React, { useState, Fragment, Component } from 'react';
import useSignUpForm from 'hooks/ServiceQualityAnexHooks';
import validateServiceQualityAnex from 'hooks/validateServiceQualityAnex';
import classNames from 'classnames/bind';
import { Redirect } from "react-router-dom";

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

const INITIAL_STATE = {
  location: "",
  hostName: "",
  cash_q1: "",
  cash_q2: "",
  cash_q3: "",
  cash_q4: "",
  remittance_q1: "",
  remittance_q2: "",
  clearing_q1: "",
  clearing_q2: "",
  clearing_q3: "",
  clearing_q4: "",
  clearing_q5: "",
  miscellaneous_q1: "",
  miscellaneous_q2: "",
  miscellaneous_q3: "",
  miscellaneous_q4: "",
  miscellaneous_q5: "",
  miscellaneous_q6: "",
  miscellaneous_q7: "",
  miscellaneous_q8: "",
  deposit_q1: "",
  deposit_q2: "",
  deposit_q3: "",
  deposit_q4: "",


  //tentative new  client
  gold_loan_processing_new_q1: "",
  gold_loan_processing_new_q2: "",
  gold_loan_processing_new_q3: "",
  gold_loan_processing_new_q4: "",
  gold_loan_processing_new_q5: "",
  gold_loan_processing_new_q6: "",
  passbook_new_q1: "",
  passbook_new_q2: "",
  passbook_new_q3: "",
  passbook_new_q4: "",
  passbook_new_q5: "",
  passbook_new_q6: "",
  mortgage_new_q1: "",
  mortgage_new_q2: "",
  mortgage_new_q3: "",
  mortgage_new_q4: "",
  mortgage_new_q5: "",
  mortgage_new_q6: "",
  personal_new_q1: "",
  personal_new_q2: "",
  personal_new_q3: "",
  personal_new_q4: "",
  personal_new_q5: "",
  personal_new_q6: "",
  loan_new_q1: "",
  loan_new_q2: "",
  loan_new_q3: "",
  loan_new_q4: "",
  loan_new_q5: "",
  loan_new_q6: "",


  //tentative repeat  client

  gold_loan_processing_repeat_q1: "",
  gold_loan_processing_repeat_q2: "",
  gold_loan_processing_repeat_q3: "",
  gold_loan_processing_repeat_q4: "",
  gold_loan_processing_repeat_q5: "",
  gold_loan_processing_repeat_q6: "",
  passbook_repeat_q1: "",
  passbook_repeat_q2: "",
  passbook_repeat_q3: "",
  passbook_repeat_q4: "",
  passbook_repeat_q5: "",
  passbook_repeat_q6: "",
  mortgage_repeat_q1: "",
  mortgage_repeat_q2: "",
  mortgage_repeat_q3: "",
  mortgage_repeat_q4: "",
  mortgage_repeat_q5: "",
  mortgage_repeat_q6: "",
  personal_repeat_q1: "",
  personal_repeat_q2: "",
  personal_repeat_q3: "",
  personal_repeat_q4: "",
  personal_repeat_q5: "",
  personal_repeat_q6: "",
  loan_repeat_q1: "",
  loan_repeat_q2: "",
  loan_repeat_q3: "",
  loan_repeat_q4: "",
  loan_repeat_q5: "",
  loan_repeat_q6: "",

};



const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState(1);
  const [text, setText] = useState("Next");

  const { inputs, handleInputChange, handleSubmit, errors, isSubmitting, redirectTo } = useSignUpForm(INITIAL_STATE, validateServiceQualityAnex);
  const step = formState[currentStep];
  const isLastStep = () => currentStep === 7;
  const isFirstStep = () => currentStep === 1;



  const handleChange = evt => {
    const { value } = evt.target;
    setFormState({
      ...formState,
      [currentStep]: { ...formState[currentStep], value }
    });
  };

  const handleBackClick = evt => {
    evt.preventDefault();
    setCurrentStep(currentStep => currentStep - 1);
  };

  const handleNextClick = evt => {
    evt.preventDefault();
    setCurrentStep(currentStep => currentStep + 1);
  };


  const goToHome = () => {
    if (redirectTo) {
      console.log("Redirect To Called")
      return <Redirect to='/' />
    }
  }

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
                  <CardHeader>HO Details</CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="location" sm={2} size="lg">Location:</Label>
                        <Col sm={5}>
                          <Input className={errors.
                            location && "mb-2"} bsSize="lg"
                            type="text"
                            onChange={handleInputChange}
                            value={inputs.location}
                            name="location"
                            required

                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="date" sm={2} size="lg">Date:</Label>
                        <Col sm={5}>
                          <Input bsSize="lg"
                            type="text"
                            onChange={handleInputChange}
                            value={inputs.date}
                            name="date"
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
        <Tab eventKey={1} title="Cash">
          <Page >
            <Card>
              <CardHeader>Cash / Online Transactions</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="cash_q1" >Cash Withdrawl</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.cash_q1}
                      name="cash_q1" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="cash_q2" >Cash Deposit</Label>
                    <Input bsSize="lg"
                      type="text"
                      onChange={handleInputChange}
                      value={inputs.cash_q2}
                      name="cash_q2"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="cash_q3" >Online Deposit And Withdrawl</Label>
                    <Input bsSize="lg"
                      type="text"
                      onChange={handleInputChange}
                      value={inputs.cash_q3}
                      name="cash_q3" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="cash_q4" >Checque Deposits - Inter Accounts Transfer</Label>
                    <Input bsSize="lg"
                      type="text"
                      onChange={handleInputChange}
                      value={inputs.cash_q4}
                      name="cash_q4" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Page>
        </Tab>
        <Tab eventKey={2} title="Remittance">
          <Page >
            <Card>
              <CardHeader>Remittances And Banker's Cheque</CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="remittance_q1" >Issuance Of Banker's Cheque</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.remittance_q1}
                      name="remittance_q1" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="remittance_q2" >Payment Of Banker's Cheque</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.remittance_q2}
                      name="remittance_q2" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Page>
        </Tab>
        <Tab eventKey={3} title="Clearing">
          <Page >
            <Card>
              <CardHeader>Clearing/Collections</CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="clearing_q1" >Local Clearing with No NIFT Arrangements</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.clearing_q1}
                      name="clearing_q1" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="clearing_q2" >NIFT Local Clearing</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.clearing_q2}
                      name="clearing_q2" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="clearing_q3" >NIFT InterCity Clearing</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.clearing_q3}
                      name="clearing_q3" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="clearing_q4" >Outward Collection</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.clearing_q4}
                      name="clearing_q4" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="clearing_q5" >Collection through Correspondent Bank</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.clearing_q5}
                      name="clearing_q5" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Page>
        </Tab>
        <Tab eventKey={4} title="Miscellaneous">
          <Page >
            <Card>
              <CardHeader>Miscellaneous</CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="miscellaneous_q1" >On request Statement of Accounts/Duplicate Statement</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q1}
                      name="miscellaneous_q1" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="miscellaneous_q2" >Balance Inquiry</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q2}
                      name="miscellaneous_q2" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="miscellaneous_q3" >Account Opening</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q3}
                      name="miscellaneous_q3" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="miscellaneous_q4" >Cheque Book Issuance</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q4}
                      name="miscellaneous_q4" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="miscellaneous_q5" >Delivery of Cheque Book to Client(once received in branch)</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q5}
                      name="miscellaneous_q5" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="miscellaneous_q6" >Stop payment Requests for cheques</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q6}
                      name="miscellaneous_q6" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="miscellaneous_q7" >Standing Instructions</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q7}
                      name="miscellaneous_q7" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="miscellaneous_q8" >Status Update/account maintenance/deceased Marking</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.miscellaneous_q8}
                      name="miscellaneous_q8" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Page>
        </Tab>
        <Tab eventKey={5} title="Deposit">
          <Page >
            <Card>
              <CardHeader>Term Deposit</CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="deposit_q1" >Term Deposit Issuance</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.deposit_q1}
                      name="deposit_q1" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="deposit_q2" >Term Deposit Auto Renewal / Roll Over</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.deposit_q2}
                      name="deposit_q2" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="deposit_q3" >Term Deposit Special Rate Renewal/ Roll Over</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.deposit_q3}
                      name="deposit_q3" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="deposit_q4" >Term Deposit Pre mature Encashment</Label>
                    <Input type="text"
                      onChange={handleInputChange}
                      value={inputs.deposit_q4}
                      name="deposit_q4" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Page>
        </Tab>

        <Tab eventKey={6} title="Tentative TATs for Lending/Advances">
          <Page  >
            <Card>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-sm-1"></div>
                    <div className="col-xs-12 col-md-12">
                      <div className="card">
                        <div className="card-header text-center">Tentative TATs for Lending/Advances</div>
                        <div className="card-body">
                          <div className="row">
                            <div  >
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th className="column-middle text-info" colspan="3">For New Client</th>
                                    <th className="card-header text-center" colspan="1" width="10%">Branch Credit Committee
                                                                        <tr>
                                        <th className="column-middle" colspan="1" width="10%">Verification/Appraisal/Approval</th>
                                        <th className="column-middle" colspan="1" width="10%">Disbursment(including account opening)</th>
                                        <th className="column-middle" colspan="1" width="10%">Total TAT</th>
                                      </tr>
                                    </th>

                                    <th className="card-header text-center" colspan="1">Area Credit Committee(Inclusive Of BCC Time)
                                                                        <tr>
                                        <th className="column-middle" colspan="1" width="10%">Verification/Appraisal/Approval</th>
                                        <th className="column-middle" colspan="1" width="10%">Disbursment(including account opening)</th>
                                        <th className="column-middle" colspan="1" width="10%">Total TAT</th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1"></th>
                                  </tr>
                                  {/* INDIVIDUAL LOANS / ROSHANZAR LOAN: */}
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Individual Loans / RoshanZar Loan:</th>
                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Gold Loan Processing</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_new_q1}
                                            name="gold_loan_processing_new_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_new_q2}
                                            name="gold_loan_processing_new_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_new_q3}
                                            name="gold_loan_processing_new_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_new_q4}
                                            name="gold_loan_processing_new_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_new_q5}
                                            name="gold_loan_processing_new_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_new_q6}
                                            name="gold_loan_processing_new_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Agri Passbook loan processing</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_new_q1}
                                            name="passbook_new_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_new_q2}
                                            name="passbook_new_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_new_q3}
                                            name="passbook_new_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_new_q4}
                                            name="passbook_new_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_new_q5}
                                            name="passbook_new_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_new_q6}
                                            name="passbook_new_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Mortgage/Property loan Porcessing</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_new_q1}
                                            name="mortgage_new_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_new_q2}
                                            name="mortgage_new_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_new_q3}
                                            name="mortgage_new_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_new_q4}
                                            name="mortgage_new_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_new_q5}
                                            name="mortgage_new_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_new_q6}
                                            name="mortgage_new_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Personal/ Third party Guarantee</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_new_q1}
                                            name="personal_new_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_new_q2}
                                            name="personal_new_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_new_q3}
                                            name="personal_new_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_new_q4}
                                            name="personal_new_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_new_q5}
                                            name="personal_new_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_new_q6}
                                            name="personal_new_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="text-center" colspan="3">Group Loans</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_new_q1}
                                            name="loan_new_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_new_q2}
                                            name="loan_new_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_new_q3}
                                            name="loan_new_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_new_q4}
                                            name="loan_new_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_new_q5}
                                            name="loan_new_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_new_q6}
                                            name="loan_new_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="column-middle text-info" colspan="3">For Repeat Client</th>
                                  </tr>


                                  {/* INDIVIDUAL LOANS / ROSHANZAR LOAN: */}
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Individual Loans / RoshanZar Loan:</th>

                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Gold Loan Processing</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_repeat_q1}
                                            name="gold_loan_processing_repeat_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_repeat_q2}
                                            name="gold_loan_processing_repeat_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_repeat_q3}
                                            name="gold_loan_processing_repeat_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_repeat_q4}
                                            name="gold_loan_processing_repeat_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_repeat_q5}
                                            name="gold_loan_processing_repeat_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.gold_loan_processing_repeat_q6}
                                            name="gold_loan_processing_repeat_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Agri Passbook loan processing</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_repeat_q1}
                                            name="passbook_repeat_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_repeat_q2}
                                            name="passbook_repeat_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_repeat_q3}
                                            name="passbook_repeat_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_repeat_q4}
                                            name="passbook_repeat_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_repeat_q5}
                                            name="passbook_repeat_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.passbook_repeat_q6}
                                            name="passbook_repeat_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Mortgage/Property loan Porcessing</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_repeat_q1}
                                            name="mortgage_repeat_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_repeat_q2}
                                            name="mortgage_repeat_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_repeat_q3}
                                            name="mortgage_repeat_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_repeat_q4}
                                            name="mortgage_repeat_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_repeat_q5}
                                            name="mortgage_repeat_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.mortgage_repeat_q6}
                                            name="mortgage_repeat_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="card-header text-center" colspan="3">Personal/ Third party Guarantee</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_repeat_q1}
                                            name="personal_repeat_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_repeat_q2}
                                            name="personal_repeat_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_repeat_q3}
                                            name="personal_repeat_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_repeat_q4}
                                            name="personal_repeat_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_repeat_q5}
                                            name="personal_repeat_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.personal_repeat_q6}
                                            name="personal_repeat_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
                                  </tr>
                                  <tr>
                                    <th className="text-center" colspan="3">Group Loans</th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_repeat_q1}
                                            name="loan_repeat_q1"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_repeat_q2}
                                            name="loan_repeat_q2"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_repeat_q3}
                                            name="loan_repeat_q3"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="card-header text-center" colspan="1" width="10%">
                                      <tr>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_repeat_q4}
                                            name="loan_repeat_q4"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_repeat_q5}
                                            name="loan_repeat_q5"
                                          />
                                        </th>
                                        <th className="column-middle" colspan="1" >
                                          <Input bsSize="lg"
                                            type="text"
                                            onChange={handleInputChange}
                                            value={inputs.loan_repeat_q6}
                                            name="loan_repeat_q6"
                                          />
                                        </th>
                                      </tr>
                                    </th>
                                    <th className="column-middle" colspan="1">Days</th>
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
      {!isFirst && <Button onClick={handleBackClick}>&lt; Back</Button>}
      {!isLast && <Button onClick={handleNextClick}>Next &gt;</Button>}


    </Fragment >
  );
};



export default FormPage;
