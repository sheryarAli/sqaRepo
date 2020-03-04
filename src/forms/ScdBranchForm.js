import Page from 'components/Page';
import React, { useState, Fragment, Component } from 'react';
import useSignUpForm from 'hooks/ScdBranchHooks';
import validateScdBranch from 'hooks/validateScdBranch';
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
import { Redirect } from "react-router-dom";


const INITIAL_STATE = {
    branchLocation: "",
    hostName: "",
    security_q1: "",
    security_q2: "",
    securtiy_q3: "",
    exterior_q1: "",
    exterior_q2: "",
    exterior_q3: "",
    exterior_q4: "",
    exterior_q5: "",
    hall_q1: "",
    hall_q2: "",
    hall_q3: "",
    hall_q4: "",
    hall_q5: "",
    hall_q6: "",
    hall_q7: "",
    hall_q8: "",
    hall_q9: "",
    hall_q10: "",
    hall_q11: "",
    hall_q12: "",
    hall_q13: "",
    hall_q14: "",
    display_q1: "",
    display_q2: "",
    display_q3: "",
    display_q4: "",
    display_q5: "",
    branch_q1: "",
    branch_q2: "",
    branch_q3: "",
    branch_q4: "",
    branch_q5: "",
    branch_q6: "",
    atm_q1: "",
    atm_q2: "",
    atm_q3: "",
    atm_q4: "",
    atm_q5: "",
    atm_q6: "",
    atm_q7: "",
    atm_q8: "",
    atm_q9: "",
    atm_q10: "",
    atm_q11: "",
    systems_q1: "",
    systems_q2: "",
};



const FormPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formState, setFormState] = useState(1);
    const [text, setText] = useState("Next");
    const [errorTab1, setErrorTab1] = React.useState({});
    const { inputs, handleInputChange, handleSubmit, errors, isSubmitting, redirectTo } = useSignUpForm(INITIAL_STATE, validateScdBranch);
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
                {/* <Tab eventKey={1} title="Branch Details">
                    <Page >
                        <Row>
                            <Col xl={12} lg={12} md={12}>
                                <Card>
                                    <CardHeader>Branch Details</CardHeader>
                                    <CardBody>
                                        <Form>
                                            <FormGroup row>
                                                <Label for="branch_location" sm={2} size="lg">Branch Name And Code:</Label>
                                                <Col sm={5}>
                                                    <Input className={errorTab1.branchLocation && "error-input"} bsSize="lg"
                                                        type="text"
                                                        onChange={handleInputChange}
                                                        value={inputs.branchLocation}
                                                        name="branchLocation"
                                                    />
                                                    {errorTab1.hoLocation && <p className="error-text">{errorTab1.hoLocation}</p>}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="host_name" sm={2} size="lg">Host Name:</Label>
                                                <Col sm={5}>
                                                    <Input className={errorTab1.hostName && "error-input"} bsSize="lg"
                                                        type="text"
                                                        onChange={handleInputChange}
                                                        value={inputs.hostName}
                                                        name="hostName"
                                                    />
                                                    {errorTab1.hostName && <p className="error-text">{errorTab1.hostName}</p>}
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Page>
                </Tab> */}



                <Tab eventKey={1} title="Security Guard">
                    <Page >
                        <Card>
                            <CardHeader>Security Guard </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="q1" >Security Guard are available and vigilent?</Label>
                                        <Input type="select"
                                            onChange={handleInputChange}
                                            value={inputs.security_q1}
                                            name="security_q1">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q2" >Security Guard dress code is satisfactory?</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.security_q2}
                                            name="security_q2">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q3" >Security guard have the scanner in hand and using it properly?</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.securtiy_q3}
                                            name="securtiy_q3" >
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
                <Tab eventKey={2} title="Branch Exterior">
                    <Page >
                        <Card>
                            <CardHeader>Branch Exterior</CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="q1" >Branch Signage Clean in Order ?</Label>
                                        <Input type="select"
                                            onChange={handleInputChange}
                                            value={inputs.exterior_q1}
                                            name="exterior_q1" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q2" >Branch main door and glass walls clean and spotless</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.exterior_q2}
                                            name="exterior_q2">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q2" >Branch outdoor marketing skins in good condition (if applicable )</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.exterior_q3}
                                            name="exterior_q3">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q2" >Branch main door and glass walls clean and spotless</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.exterior_q4}
                                            name="exterior_q4">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q2" >Front Entrance , Windows , Parking area is clean</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.exterior_q5}
                                            name="exterior_q5">
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
                <Tab eventKey={3} title="Banking Hall /Customer Area">
                    <Page >
                        <Card>
                            <CardHeader>Banking Hall /Customer Area</CardHeader>
                            <CardBody>
                                <Form >
                                    <FormGroup>
                                        <Label for="q4" >All Indoor Lights switched on </Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q1}
                                            name="hall_q1" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q5" >Main Floor Dusted/Mopped/Vaccummed?</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q2}
                                            name="hall_q2">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q6" >Air Conditioners / Heaters turned on (if required)</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q3}
                                            name="hall_q3">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >Customer waiting area is cleaned and organized</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q4}
                                            name="hall_q4" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q8" >checque writing desk(s) any  alternate furniture used for same purpsoe is clean  and Organized(All Transaction Slips / Forms Available)(If Applicable)?</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q5}
                                            name="hall_q5">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q9" >Branch Walls and Ceiling Clean?</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q6}
                                            name="hall_q6">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q10" >Branch Walls are neat (no loose Electric Cables/ wires)</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q7}
                                            name="hall_q7" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q12" >Branch furniture polished/ingood condition (no torn or worn out)</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q8}
                                            name="hall_q8">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q12" >Availiblity of clean water in dispenser</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q9}
                                            name="hall_q9" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q13" >Teller area is clean fromn inside/outside</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q10}
                                            name="hall_q10" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q14" >Fax Machine / Telephone exchange /Photocopier/Main printer Working</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q11}
                                            name="hall_q11" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q15" >All documentation ,files, registers, neatly stored safely</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q12}
                                            name="hall_q12">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q16" >Toilets(Washed/ Mopped / Tissue  and Soap available / washinh material removed)</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q13}
                                            name="hall_q13" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q1" >Kitchen (clean cabinets/ sink ocen / rerigerator / floor mopped)</Label>
                                        <Input type="select"
                                            onChange={handleInputChange}
                                            value={inputs.hall_q14}
                                            name="hall_q14" >
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
                <Tab eventKey={4} title="Display - Notices">
                    <Page >
                        <Card>
                            <CardHeader>Display-Notices</CardHeader>
                            <CardBody>
                                <Form >
                                    <FormGroup>
                                        <Label for="q4" >Important notices displayed neatly on the Cash Counter / Notice Board and currency posters visibility displayed. </Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.display_q1}
                                            name="display_q1" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q5" >Availiblity and variety of material/ Marketing Collateral nealty and visibility displayed(Brochures /wall and ceiling hangings / standees etc.)</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.display_q2}
                                            name="display_q2">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q5" >Availiblity of all printed stationary neatly and visibly displayed in sufficient quantity</Label>
                                        <Input
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.display_q3}
                                            name="display_q3" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q6" >Complaint Placard placed at customer area</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.display_q4}
                                            name="display_q4" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >Product LED screen is on and Marketing material vedio is displayed</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.display_q5}
                                            name="display_q5" >
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
                <Tab eventKey={5} title="Branch Staff">
                    <Page >
                        <Card>
                            <CardHeader>Barnch Staff</CardHeader>
                            <CardBody>
                                <Form >
                                    <FormGroup>
                                        <Label for="q4" >All Stafff reach office at 08:45AM and ready for all banking services at 09:00AM  </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.branch_q1}
                                            name="branch_q1" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q5" >Branch staff well groomed and professionaly dressed as per Guidelines</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.branch_q2}
                                            name="branch_q2" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q6" >All branch staff wearing Bank Id Card during banking hours</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.branch_q3}
                                            name="branch_q3" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >Clean desk policy true implementation is observed  on all staff desk </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.branch_q4}
                                            name="branch_q4" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >Support staff (Tea boy , driver , Cleaning Staff) wearing  proper uniform </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.branch_q5}
                                            name="branch_q5" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >No staff was found with in the premises / at entrance</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.branch_q6}
                                            name="branch_q6" >
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
                <Tab eventKey={6} title="ATM (if applicable)">
                    <Page >
                        <Card>
                            <CardHeader>ATM (if applicable)</CardHeader>
                            <CardBody>
                                <Form >
                                    <FormGroup>
                                        <Label for="q4" >ATM Signage cleaned </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q1}
                                            name="atm_q1" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q5" >ATM door cleaned and spotless</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q2}
                                            name="atm_q2" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q6" >ATM Vestibule area cleaned/mopped </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q3}
                                            name="atm_q3" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >ATM air conditioner  is working  </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q4}
                                            name="atm_q4">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >ATM hotline working</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q5}
                                            name="atm_q5" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >ATM verstibule lights switched on </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q6}
                                            name="atm_q6">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >ATM cables/wires are properly cliped </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q7}
                                            name="atm_q7">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >ATM area Dustbin cleaned  </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q8}
                                            name="atm_q8">
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >ATM functioning / Camera functioning </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q9}
                                            name="atm_q9" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >Drop box is placed </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q10}
                                            name="atm_q10" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q7" >Ensure ATM Cash/ Ticket Roll Replenishment  </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.atm_q11}
                                            name="atm_q11" >
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
                <Tab eventKey={7} title="Sytems">
                    <Page >
                        <Card>
                            <CardHeader>Sytems</CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="q4" >Sytem/ Network availibility. </Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.systems_q1}
                                            name="systems_q1" >
                                            <option value="">Select</option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="q5" >Branch Power availiblity (Wapda , Generator)</Label>
                                        <Input className={errors.hoLocation && "mb-2"}
                                            type="select"
                                            onChange={handleInputChange}
                                            value={inputs.systems_q2}
                                            name="systems_q2" >
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
