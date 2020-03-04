import React from "react"
const DigitalFormListHooks = (props) => {
    return (
        props.digitalFormList.map((val, idx) => {
            let accountNumber = `accountNumber-${idx}`,
                accountTitle = `accountTitle-${idx}`, contactNumber = `contactNumber-${idx}`, customerSetType = `customerSetType-${idx}`,
                pitched = `pitched-${idx}`, newRequest = `newRequest-${idx}`, delivered = `delivered-${idx}`, activated = `activated-${idx}`,
                appPitched = `appPitched-${idx}`, downloadedCustomer = `downloadedCustomer-${idx}`, ussdBanking = `ussdBanking-${idx}`, ivr = `ivr-${idx}`,
                liveChat = `liveChat-${idx}`, smsBanking = `smsBanking-${idx}`, contactCentre = `contactCentre-${idx}`, adcChannels = `adcChannels-${idx}`,
                firstSocialMedia = `firstSocailMedia-${idx}`, newDespositAccount = `newDespositAccount-${idx}`, healthInsurance = `healthInsurance-${idx}`,
                overallProductSelling = `overallProductSelling-${idx}`, depositMobilized = `depositMobilized-${idx}`, bookletProvided = `bookletProvided-${idx}`,
                financialLitercy = `financialLitercy-${idx}`, kfsProvided = `kfsProvided-${idx}`, complaintLodgment = `complaintLodgment-${idx}`;
            return (
                <tr key={val.index}>
                    <td width="15%" >
                        <input type="text" name="accountNumber" data-id={idx} id={accountNumber} className="form-control " />
                    </td>
                    <td width="15%">
                        <input type="text" name="accountTitle" id={accountTitle} data-id={idx} className="form-control " />
                    </td>
                    <td width="15%">
                        <input type="text" name="contactNumber" id={contactNumber} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="customerSetType" id={customerSetType} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="pitched" id={pitched} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="newRequest" id={newRequest} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="delivered" id={delivered} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="activated" id={activated} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="appPitched" id={appPitched} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="downloadedCustomer" id={downloadedCustomer} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="ussdBanking" id={ussdBanking} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="90%">
                        <input type="text" name="ivr" id={ivr} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="liveChat" id={liveChat} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="smsBanking" id={smsBanking} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="contactCentre" id={contactCentre} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="adcChannels" id={adcChannels} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="firstSocialMedia" id={firstSocialMedia} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="newDespositAccount" id={newDespositAccount} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="healthInsurance" id={healthInsurance} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="overallProductSelling" id={overallProductSelling} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="depositMobilized" id={depositMobilized} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="bookletProvided" id={bookletProvided} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="financialLitercy" id={financialLitercy} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="kfsProvided" id={kfsProvided} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="complaintLodgment" id={complaintLodgment} data-id={idx} className="form-control"></input>
                    </td>
                    {/* <td>
            <select name="taskStatus" id={taskStatus} data-id={idx} className="form-control" >
              <option value="pending">Pending</option>
              <option value="In Progress">In progress</option>
              <option value="Completed">Completed</option>
              <option value="Hold">Hold</option>
            </select>
          </td> */}
                    <td width="80%" className="unstyled-form">
                        {
                            idx === 0 ? <button onClick={() => props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
                        }
                    </td>
                </tr >
            )
        })
    )
}
export default DigitalFormListHooks