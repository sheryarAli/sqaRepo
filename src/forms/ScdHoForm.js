import Page from 'components/Page';
import React, { useState, Fragment, useEffect, Component } from 'react';
import useSignUpForm from 'hooks/ScdHoFormHooks';
import validateAuthentication from 'hooks/validateAuthentication';
import classNames from 'classnames/bind';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Prompt } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";


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
import SimpleReactValidator from 'simple-react-validator';
import { Redirect } from "react-router-dom";

const INITIAL_STATE = {
  hoLocation: "",
  hostName: "",
  date: "",
  floor_q1: "",
  floor_q2: "",
  floor_q3: "",
  floor_q4: "",
  floor_q5: "",
  floor_q6: "",
  floor_q7: "",
  floor_q8: "",
  floor_q9: "",
  floor_q10: "",
  floor_q11: "",
  floor_q12: "",
  floor_q13: "",
  floor_q14: "",
  floor_q15: "",
  floor_q16: "",
  staff_q1: "",
  staff_q2: "",
  staff_q3: "",
  staff_q4: "",
  staff_q5: "",
  staff_q6: "",
  staff_q7: "",
  staff_q8: "",
};




const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState(1);
  const [text, setText] = useState("Next");

  const { inputs, touched, handleInputChange, handleSubmit, errors, isSubmitting, redirectTo } = useSignUpForm(INITIAL_STATE, validateAuthentication);
  const step = formState[currentStep];
  const isLastStep = () => currentStep === 2;
  const isFirstStep = () => currentStep === 1;


  // const validator = new SimpleReactValidator({ autoForceUpdate: this });


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
    // if (validator.allValid()) {
    //   console.log('if called')
    // } else {
    //   console.log('else called')
    //   validator.showMessages();

    // }
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

    < Fragment >
      {goToHome()}
      <Tabs id="controlled-tab-example" activeKey={currentStep} onSelect={{ handleChange }}  >

        {/* 
        <Tab eventKey={1} title="HO Details">
          <Page >
            <Row>
              <Col xl={12} lg={12} md={12}>
                <Card>
                  <CardHeader>HO Details</CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="ho_location" sm={2} size="lg">HO Location:</Label>
                        <Col sm={5}>
                          <Input className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                            bsSize="lg"
                            type="text"
                            valid={false}
                            onChange={handleInputChange}
                            value={inputs.hoLocation}
                            name="hoLocation"
                          />

                          {/* <div>
                            {validator.message('title', inputs.hoLocation, 'required|alpha')}
                          </div> 
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="host_name" sm={2} size="lg">Host Name:</Label>
                        <Col sm={5}>
                          <Input bsSize="lg"
                            type="text"
                            onChange={handleInputChange}
                            value={inputs.hostName}
                            valid={false}
                            name="hostName"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="host_dept" sm={2} size="lg">Host Depratment:</Label>
                        <Col sm={5}>
                          <Input bsSize="lg"
                            type="text"
                            onChange={handleInputChange}
                            value={inputs.hostDept}
                            name="hostDept"
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
        </Tab>
       
      */}

        <Tab eventKey={1} title="HO Floor">
          <Page >
            <Card>
              <CardHeader>HO Floor</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="q1" >Floor Main entrance door and glass walls clean and spotless?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q1}
                      name="floor_q1" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q2" >All Indoor lights switched on Floor?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q2}
                      name="floor_q2">
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q3" >Main Floor - Dusted / Mopped/ Vacuumed?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q3}
                      name="floor_q3" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q4" >Air-Conditioners/ Heaters turned on Floor (if required)?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q4}
                      name="floor_q4" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q5" >Floor Walls are neat (no loose wires)?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q5}
                      name="floor_q5" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q6" >All staff Desk kept neat & clean in organized on manner?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q6}
                      name="floor_q6"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q7" >Floor furniture polished/ ingood condition (not torn or worn out)?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q7}
                      name="floor_q7"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q8" >All staff Desk kept neat & clean in organized on manner?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q8}
                      name="floor_q8"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q9" >Floor furniture polished/ ingood condition (not torn or worn out)?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q9}
                      name="floor_q9"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q10" >All dept documentation, files, registers neatly stored safely?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q10}
                      name="floor_q10"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q12" >Floor Customer Waiting area is clean and organized?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q11}
                      name="floor_q11"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q12" >Check Fax Machine / Telephone exchange / Photocopier & Main Printer working?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q12}
                      name="floor_q12"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q13" >Elctric cables/ wires are properly cliped on all desk?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q13}
                      name="floor_q13" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q14" >Cafetaria area is clean & sitting area well organized?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q14}
                      name="floor_q14"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q15" >Toilets (Washed / Mopped / Tissue available / washing material removed)?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q15}
                      name="floor_q15"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q16" >Kitchen (clean cabinets / sink/ oven / refrigerator / floor mopped)?</Label>
                    <Input
                      type="select"
                      onChange={handleInputChange}
                      value={inputs.floor_q16}
                      name="floor_q16"  >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Page>
        </Tab>
        <Tab eventKey={2} title="HO Staff">
          <Page >
            <Card>
              <CardHeader>HO Staff</CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="q1" >General observation of Custodian for HO staff reaching on time. (as per SOP all staff must reach office at 09:00 AM & available on workstation)?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q1}
                      name="staff_q1" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q1" >All staff attending Phone on  3 Bells?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q2}
                      name="staff_q2" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q1" >PABX Auto attended is working?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q3}
                      name="staff_q3">
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q1" >All Staff wearing bank ID card during banking hours?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q4}
                      name="staff_q4" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q1" >Clean desk policy true implementation is observed on all staff desk?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q5}
                      name="staff_q5" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q1" >Support staff (Tea boy, Driver, Cleaning staff) wearing proper uniform?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q6}
                      name="staff_q6" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q1" >No staff was found smoking with in the premises / at entrance?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q7}
                      name="staff_q7" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="q1" >Staff remains absence unnecessarly (frequency /Longer period) from his/her seats for Lunch/breakfast other then assigned breaktime?</Label>
                    <Input type="select"
                      onChange={handleInputChange}
                      value={inputs.staff_q8}
                      name="staff_q8" >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </Input>
                  </FormGroup>
                  <Button disabled={isSubmitting} type="submit"> Submit</Button>

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
