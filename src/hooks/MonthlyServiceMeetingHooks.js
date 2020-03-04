import React from "react"
const MonthlyServiceMeetingHooks = (props) => {
    return (
        props.monthlyServiceMeetingList.map((val, idx) => {
            let staffNameAtendees = `staffNameAttendees-${idx}`,
                staffEmployeeNoAttendees = `staffEmployeeNoAttendees-${idx}`, functionalTitleAttendees = `functionalTitleAttendees-${idx}`, staffNameAbsentees = `staffNameAbsentees-${idx}`,
                staffEmployeeNoAbsentees = `staffEmployeeNoAbsentees-${idx}`, functionalTitleAbsentees = `functionalTitleAbsentees-${idx}`;
            return (
                <tr key={val.index}>
                    <td width="15%" >
                        <input type="text" name="staffNameAttendees" data-id={idx} id={staffNameAtendees} className="form-control " />
                    </td>
                    <td width="15%">
                        <input type="text" name="staffEmployeeNoAttendees" id={staffEmployeeNoAttendees} data-id={idx} className="form-control " />
                    </td>
                    <td width="15%">
                        <input type="text" name="functionalTitleAttendees" id={functionalTitleAttendees} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="staffNameAbsentees" id={staffNameAbsentees} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="staffEmployeeNoAbsentees" id={staffEmployeeNoAbsentees} data-id={idx} className="form-control"></input>
                    </td>
                    <td width="15%">
                        <input type="text" name="functionalTitleAbsentees" id={functionalTitleAbsentees} data-id={idx} className="form-control"></input>
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
export default MonthlyServiceMeetingHooks