import React from "react"
const MeetingAgendaHooks = (props) => {
    return (
        props.meetingAgendaList.map((val, idx) => {
            let action = `action-${idx}`,
                responsibility = `responsibility-${idx}`, targetDate = `targetDate-${idx}`;
            return (
                <tr key={val.index}>
                    <td width="15%"  >
                        <input type="text" name="action" data-id={idx} id={action} className="form-control " />
                    </td>
                    <td width="15%">
                        <input type="text" name="responsibility" id={responsibility} data-id={idx} className="form-control " />
                    </td>
                    <td width="15%">
                        <input type="text" name="targetDate" id={targetDate} data-id={idx} className="form-control"></input>
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
export default MeetingAgendaHooks