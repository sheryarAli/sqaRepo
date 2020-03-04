import React from "react"
import DigitalFormListHooks from "../hooks/DigitalFormListHooks";
import axios from 'axios';
import '../styles/form_styles.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Session } from 'bc-react-session';
import { Redirect } from "react-router-dom";

class Form extends React.Component {

    state = {
        digitalFormList: [{
            index: Math.random(), accountNumber: "",
            accountTitle: "", contactNumber: "", customerSetType: "", pitched: "", newRequest: "",
            delivered: "", activated: "", appPitched: "", downloadedCustomer: "", ussdBanking: "", ivr: "", liveChat: "",
            smsBanking: "", contactCentre: "", adcChannels: "", firstSocialMedia: "", newDespositAccount: "",
            healthInsurance: "", overallProductSelling: "", depositMobilized: "", bookletProvided: "", financialLitercy: "",
            kfsProvided: "", complaintLodgment: ""
        }],
        date: "",
        branchCode: "",
        branchName: "",
        staffName: "",
        staffDesignation: "",
        toHome: false,
    }

    handleChange = (e) => {
        if (["accountNumber", "accountTitle",
            "contactNumber", "customerSetType", "pitched", "newRequest", "delivered", "activated", "appPitched",
            "downloadedCustomer", "ussdBanking", "ivr", "liveChat", "smsBanking", "contactCentre", "adcChannels", "firstSocialMedia", "newDespositAccount",
            "healthInsurance", "overallProductSelling", "depositMobilized", "bookletProvided", "financialLitercy", "kfsProvided", "complaintLodgment"].includes(e.target.name)) {
            let digitalFormList = [...this.state.digitalFormList]
            digitalFormList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            digitalFormList: [...prevState.digitalFormList, {
                index: Math.random(), accountNumber: "",
                accountTitle: "", contactNumber: "", customerSetType: "", pitched: "", newRequest: "",
                delivered: "", activated: "", appPitched: "", downloadedCustomer: "", ussdBanking: "", ivr: "", liveChat: "",
                smsBanking: "", contactCentre: "", adcChannels: "", firstSocialMedia: "", newDespositAccount: "",
                healthInsurance: "", overallProductSelling: "", depositMobilized: "", bookletProvided: "", financialLitercy: "",
                kfsProvided: "", complaintLodgment: ""
            }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            digitalFormList: this.state.digitalFormList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { payload } = Session.get();
        console.log(payload.branchName);
        this.setState({
            date: Date.now(),
            branchCode: payload.branchCode,
            branchName: payload.branchName,
            toHome: true,
        }, () => {
            // for (var i = 0; i < this.state.taskList.length; i++) {
            //     if (this.state.taskList[i].accountNumber === '' || this.state.taskList[i].accountTitle === '') {
            //         NotificationManager.warning("Please Fill up Required Field.Please Check Project name And Task Field");
            //         return false;
            //     }
            // }

            for (var i = 0; i < this.state.digitalFormList.length; i++) {
                if (this.state.digitalFormList[i].accountNumber === ''
                    || this.state.digitalFormList[i].accountTitle === ''
                    || this.state.digitalFormList[i].contactNumber === ''
                    || this.state.digitalFormList[i].customerSetType === ''
                    || this.state.digitalFormList[i].pitched === ''
                    || this.state.digitalFormList[i].newRequest === ''
                    || this.state.digitalFormList[i].delivered === ''
                    || this.state.digitalFormList[i].activated === ''
                    || this.state.digitalFormList[i].appPitched === ''
                    || this.state.digitalFormList[i].downloadedCustomer === ''
                    || this.state.digitalFormList[i].ussdBanking === ''
                    || this.state.digitalFormList[i].ivr === ''
                    || this.state.digitalFormList[i].liveChat === ''
                    || this.state.digitalFormList[i].smsBanking === ''
                    || this.state.digitalFormList[i].contactCentre === ''
                    || this.state.digitalFormList[i].adcChannels === ''
                    || this.state.digitalFormList[i].firstSocialMedia === ''
                    || this.state.digitalFormList[i].newDespositAccount === ''
                    || this.state.digitalFormList[i].healthInsurance === ''
                    || this.state.digitalFormList[i].overallProductSelling === ''
                    || this.state.digitalFormList[i].depositMobilized === ''
                    || this.state.digitalFormList[i].bookletProvided === ''
                    || this.state.digitalFormList[i].financialLitercy === ''
                    || this.state.digitalFormList[i].kfsProvided === ''
                    || this.state.digitalFormList[i].complaintLodgment === '') {

                    console.log(this.state.digitalFormList[i])
                    alert('Kindly fill complete Digital Migration Form');
                    return false;
                }
            }
            let data = { formData: this.state }
            // axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
            axios.post("http://localhost:5000/add/digitalMigration", data).then(res => {
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
            digitalFormList: this.state.digitalFormList.filter(r => r !== record)
        });

    }
    render() {
        let { digitalFormList } = this.state//let { notes, date, description, taskList } = this.state
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <div className="content">
                <NotificationContainer />
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row " style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-xs-12 col-md-8">
                            <div className="card">
                                <div className="card-header text-center">Add Your Daily Task</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Staff Name</label>
                                                <input type="text" name="staffName" id="staffName" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Staff Designation</label>
                                                <input type="text" name="staffDesignation" id="staffDesignation" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="headingStyling" >
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="column-middle" align="" colspan="4">Branch/Walk in Customers detail</th>
                                                        <th className="column-middle" colspan="6" width="10%">Financial Digital Channels
                                                        <table >
                                                                <thead>
                                                                    <tr>
                                                                        <th className="text-center" colspan="4" width="45%">Debit Card</th>
                                                                        <th className="text-center" colspan="3" width="10%">One Touch</th>
                                                                    </tr>
                                                                </thead>
                                                            </table>
                                                        </th>
                                                        <th className="column-middle" colspan="7" width="10%">Other Digital Channels</th>
                                                        <th className="column-middle" colspan="4" width="10%">Cross Selling</th>
                                                        <th className="column-middle" colspan="4" width="10%">Client Awareness/Financial Litercy</th>
                                                    </tr>
                                                    <tr>
                                                        <th width="10%">Account Number</th>
                                                        <th width="10%">Account Title / Customer Name</th>
                                                        <th width="10%">Contact Number</th>
                                                        <th width="10%" >Customer have mobile set type</th>
                                                        <th width="10%">Pitched</th>
                                                        <th width="10%">New Request Processed</th>
                                                        <th width="10%">Delivered</th>
                                                        <th width="10%">Activated</th>
                                                        <th width="10%">App Pitched</th>
                                                        <th width="10%">Downloaded On Customer Mobile</th>
                                                        <th width="10%">USSD Banking</th>
                                                        <th width="15%">IVR</th>
                                                        <th width="15%">Live Chat</th>
                                                        <th width="15%">SMS Banking</th>
                                                        <th width="15%">Contact Centre</th>
                                                        <th width="15%">ADC Channels(UBL Omani etc)</th>
                                                        <th width="15%">First Social Media and Web Awaz Radio</th>
                                                        <th width="15%">New Deposit Account Opened</th>
                                                        <th width="15%">Health Insurance</th>
                                                        <th width="15%">Overall Product Selling</th>
                                                        <th width="15%">Deposit Mobilized in Account</th>
                                                        <th width="15%">Booklet Maliyati Samajh Boujh Provided</th>
                                                        <th width="15%">Financial Litercy Vedios on branch screen/Social Media</th>
                                                        <th width="15%">KFS Provided</th>
                                                        <th width="15%">Complaint Lodgment Channels</th>

                                                        {/* <th>Status</th> */}
                                                    </tr>
                                                    <tr>
                                                        <th width="10%">Existing Bank Customer</th>
                                                        <th width="10%">Bank Owned/Walk-in Customer Name </th>
                                                        <th width="10%">Bank Owned/Walk-in Customer Contract</th>
                                                        <th width="10%">Android/Analog</th>
                                                        <th width="10%">Y/N</th>
                                                        <th width="10%">Y/N</th>
                                                        <th width="10%">Y/N</th>
                                                        <th width="10%">Y/N</th>
                                                        <th width="10%">Y/N</th>
                                                        <th width="10%">Y/N</th>
                                                        <th width="10%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Amount</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                        <th width="15%">Y/N</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <DigitalFormListHooks add={this.addNewRow} delete={this.clickOnDelete.bind(this)} digitalFormList={digitalFormList} />
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
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
                {console.log("form state", this.state)}
            </div >
        )
    }
}
export default Form