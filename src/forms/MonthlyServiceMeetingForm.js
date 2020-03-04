import React, { Fragment } from "react"
import MonthlyServiceMeetingHooks from "../hooks/MonthlyServiceMeetingHooks";
import MeetingAgendaHooks from "../hooks/MeetingAgendaHooks";
import axios from 'axios';
import '../styles/form_styles.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Page from 'components/Page';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Button } from 'reactstrap';
import { Session } from 'bc-react-session';
import { Redirect } from "react-router-dom";

class Form extends React.Component {
    state = {
        monthlyServiceMeetingList: [{
            index: Math.random(), staffNameAttendees: "",
            staffEmployeeNoAttendees: "", functionalTitleAttendees: "", staffNameAbsentees: "", staffEmployeeNoAbsentees: "", functionalTitleAbsentees: ""

        }],
        meetingAgendaList: [{
            index: Math.random, action: "", responsibility: "", targetDate: ""
        }],
        date: "",
        branch: "",
        branchCode: "",
        currentStep: 1,
        toHome: false,
    }


    handleBackClick = (evt) => {
        evt.preventDefault();
        console.log("handleBackClickBefore", this.currentStep)
        this.setState({ currentStep: this.state.currentStep - 1 })
        console.log("handleBackClick", this.state.currentStep)

    };

    handleNextClick = (evt) => {
        evt.preventDefault();
        console.log("handleNextClickBefore", this.state.currentStep)
        this.setState({ currentStep: this.state.currentStep + 1 })
        console.log("handleNextClick", this.state.currentStep)
    };


    isLastStep = () => this.state.currentStep === 2;
    isFirstStep = () => this.state.currentStep === 1;

    handleChange = (e) => {
        if (["staffNameAttendees", "staffEmployeeNoAttendees",
            "functionalTitleAttendees", "staffNameAbsentees", "staffEmployeeNoAbsentees", "functionalTitleAbsentees"].includes(e.target.name)) {
            let monthlyServiceMeetingList = [...this.state.monthlyServiceMeetingList]
            monthlyServiceMeetingList[e.target.dataset.id][e.target.name] = e.target.value;
        } else if (["action", "responsibility", "targetDate"].includes(e.target.name)) {
            let meetingAgendaList = [...this.state.meetingAgendaList]
            meetingAgendaList[e.target.dataset.id][e.target.name] = e.target.value;
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
            console.log("else called")
        }

        console.log("handleChangeCalled")
    }

    addNewRowAgenda = (e) => {
        this.setState((prevState) => ({
            meetingAgendaList: [...prevState.meetingAgendaList, {
                index: Math.random(), action: "", responsibility: "", targetDate: ""
            }],
        }));

        console.log("addNewRowAgenda")

    }

    deteteRowAgenda = (index) => {
        this.setState({
            meetingAgendaList: this.state.meetingAgendaList.filter((s, index) => index !== index),
        });
        console.log("deleteRowAgendaCalled")
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            monthlyServiceMeetingList: [...prevState.monthlyServiceMeetingList, {
                index: Math.random(), staffNameAttendees: "",
                staffEmployeeNoAttendees: "", functionalTitleAttendees: "", staffNameAttendees: "", staffEmployeeNoAttendees: "", functionalTitleAttendees: "",
            }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            monthlyServiceMeetingList: this.state.monthlyServiceMeetingList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { payload } = Session.get();
        this.setState({
            date: Date.now(),
            branchCode: payload.branchCode,
            branch: payload.branchName,
        }, () => {
            console.log("Date: " + this.state.date + " ,Branch: " + this.state.branch)
            // if (this.state.date === '' || this.state.branch === '') {
            //     NotificationManager.warning("Please Fill up Required Field . Please check Branch Code and Date Field");
            //     return false;
            // }
            for (var i = 0; i < this.state.monthlyServiceMeetingList.length; i++) {
                if (this.state.monthlyServiceMeetingList[i].staffNameAttendees === ''
                    || this.state.monthlyServiceMeetingList[i].staffEmployeeNoAttendees === ''
                    || this.state.monthlyServiceMeetingList[i].functionalTitleAttendees === ''
                    || this.state.monthlyServiceMeetingList[i].staffNameAttendees === ''
                    || this.state.monthlyServiceMeetingList[i].staffEmployeeNoAttendees === ''
                    || this.state.monthlyServiceMeetingList[i].functionalTitleAttendees === '') {
                    alert('Kindly fill complete Monthly Service Meeting Form');
                    return false;
                }
            }
            for (var i = 0; i < this.state.meetingAgendaList.length; i++) {
                if (this.state.meetingAgendaList[i].action === ''
                    || this.state.meetingAgendaList[i].responsibility === ''
                    || this.state.meetingAgendaList[i].targetDate === '') {
                    alert('Kindly fill complete Meeting Agenda Form');
                    return false;
                }

            }
            let data = { formData: this.state }
            console.log("data", data)
            // axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
            axios.post("http://localhost:5000/add/monthlyServiceMeeting", data).then(res => {
                console.log("axios", axios)
                if (res.data.success) NotificationManager.success(res.data.msg);
                this.setState(() => ({
                    toHome: true,
                }))
            }).catch(error => {
                console.log("error", error)
                if (error.response.status && error.response.status === 400)
                    NotificationManager.error("Bad Request");
                else NotificationManager.error("Something Went Wrong");
                this.setState({ errors: error })
            });
        })
    }

    clickOnDelete(record) {
        this.setState({
            monthlyServiceMeetingList: this.state.monthlyServiceMeetingList.filter(r => r !== record)
        });
    }

    clickOnDeleteAgenda(record) {
        this.setState({
            meetingAgendaList: this.state.meetingAgendaList.filter(r => r !== record)
        });
    }
    render() {
        let { monthlyServiceMeetingList } = this.state//let { notes, date, description, taskList } = this.state
        let { meetingAgendaList } = this.state
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <Fragment >
                <Tabs id="controlled-tab-example" activeKey={this.state.currentStep} onSelect={this.handleChange}>
                    {console.log("step", this.state.currentStep)}
                    <Tab eventKey={1} title="Monthly Service Meeting">
                        <Page >
                            <div className="content">
                                <NotificationContainer />
                                <form onChange={this.handleChange} >
                                    <div className="row " style={{ marginTop: 20 }}>
                                        <div className="col-sm-1"></div>
                                        <div className="col-xs-12 col-md-8">
                                            <div className="card">
                                                <div className="card-header text-center">Monthly Service Quality Meeting (MSQM)</div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        {/* <div className="col-sm-4">
                                                            <div className="form-group ">
                                                                <label className="required">Date</label>
                                                                <input type="date" name="date" id="date" className="form-control" placeholder="Enter Date" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group ">
                                                                <label className="required">Branch/PB:</label>
                                                                <input type="text" name="branch" id="branch" className="form-control"></input>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group ">
                                                                <label className="required">Region</label>
                                                                <input type="text" name="region" id="region" className="form-control"></input>
                                                            </div>
                                                        </div> */}
                                                        <div className="headingStyling" >
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="column-middle" colspan="3">Attendees</th>
                                                                        <th className="column-middle" colspan="3" width="10%">Absentees</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="10%">Staff Name</th>
                                                                        <th width="10%">Staff Employee No</th>
                                                                        <th width="10%">Functional Title</th>
                                                                        <th width="10%">Staff Name</th>
                                                                        <th width="10%">Staff Employee No</th>
                                                                        <th width="10%">Functional Title</th>
                                                                        {/* <th>Status</th> */}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <MonthlyServiceMeetingHooks add={this.addNewRow} delete={this.clickOnDelete.bind(this)} monthlyServiceMeetingList={monthlyServiceMeetingList} />
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr ><td colSpan="4">
                                                                        <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center "><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                                    </td></tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-1"></div>
                                    </div>
                                </form>
                                {console.log("form state", this.state)}
                            </div >
                        </Page>
                    </Tab>
                    <Tab eventKey={2} title="Meeting Agenda">
                        <Page >
                            <div className="content">
                                <NotificationContainer />
                                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                                    <div className="row " style={{ marginTop: 20 }}>
                                        <div className="col-sm-1"></div>
                                        <div className="col-xs-12 col-md-8">
                                            <div className="card">
                                                <div className="card-header text-center">Meeting Agenda Points</div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="headingStyling" >
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="column-middle" width="10%">Action(WHAT)</th>
                                                                        <th className="column-middle" width="10%">Resposibility(WHO)</th>
                                                                        <th className="column-middle" width="10%">Target Date(WHEN)</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <MeetingAgendaHooks add={this.addNewRowAgenda} delete={this.clickOnDeleteAgenda.bind(this)} meetingAgendaList={meetingAgendaList} />
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr ><td colSpan="4">
                                                                        <button onClick={this.addNewRowAgenda} type="button" className="btn btn-primary text-center "><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                                    </td></tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-1"></div>
                                    </div>
                                    <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                                </form>
                                {console.log("form state", this.state)}
                            </div >
                        </Page>
                    </Tab>
                </Tabs>

                {this.state.currentStep === 2 && <Button onClick={this.handleBackClick}>&lt; Back</Button>}
                {this.state.currentStep === 1 && <Button onClick={this.handleNextClick}>Next &gt;</Button>}
            </Fragment >

        )
    }
}
export default Form