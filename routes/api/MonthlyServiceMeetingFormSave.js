const express = require('express');
const router = express.Router();

// Item Model
const MonthlyServiceMeetingForm = require('../../models/MonthlyServiceMeetingForm');
const MonthlyServiceMeetingFormList = require('../../models/MonthlyServiceMeetingList');
const MeetingAgendaList = require('../../models/MeetingAgendaList');

// @route   POST api/items
// @des     Create an Item
// @access  Public 

{
    console.log("api Called")
}


router.route('/monthlyServiceMeeting').post(function (req, res) {

    var monthlyServiceMeetingObj = new MonthlyServiceMeetingForm({ date: req.body.formData.date, branch: req.body.formData.branch, region: req.body.formData.region });
    monthlyServiceMeetingObj.save(function (err, monmthlyServiceMeetingForm) {
        if (err) {
            console.log("error called", err)
            return res.status(400).json({ err: err })
        }
        if (monmthlyServiceMeetingForm) {
            req.body.formData.monthlyServiceMeetingList.map((monthlyServiceMeetingList, index) => {
                var monthlyServiceMeetingListObj = new MonthlyServiceMeetingFormList({
                    monthlyServiceMeetingFormId: monmthlyServiceMeetingForm._id,
                    staffNameAtendees: monthlyServiceMeetingList.staffNameAtendees,
                    staffEmployeeNoAttendees: monthlyServiceMeetingList.staffEmployeeNoAttendees,
                    functionalTitleAttendees: monthlyServiceMeetingList.functionalTitleAttendees,
                    staffNameAbsentees: monthlyServiceMeetingList.staffNameAbsentees,
                    staffEmployeeNoAbsentees: monthlyServiceMeetingList.staffEmployeeNoAbsentees,
                    functionalTitleAbsentees: monthlyServiceMeetingList.functionalTitleAbsentees
                });
                monthlyServiceMeetingListObj.save((error, savedTask) => {
                    if (err) {
                        console.log("monthlyServiceMeeetingList Error Called")
                        monthlyServiceMeetingObj.deleteOne({ _id: monthlyServiceMeetingFormId._id }, function (err) {
                            return res.status(400).json({ err: error });
                        });
                        monthlyServiceMeetingListObj.deleteOne({ taskId: task._id }, function (err) {
                            return res.status(400).json({ err: error });
                        });
                        return res.status(400).json({ err: error });
                    }
                })
            })

            req.body.formData.meetingAgendaList.map((meetingAgendaList, index) => {
                var meetingAgendaListObj = new MeetingAgendaList({
                    monthlyServiceMeetingFormId: monmthlyServiceMeetingForm._id,
                    action: meetingAgendaList.action,
                    responsibility: meetingAgendaList.responsibility,
                    targetDate: meetingAgendaList.targetDate
                });

                meetingAgendaListObj.save((error, savedTask) => {
                    if (err) {
                        console.log("meetingAgendaList Error Called")
                        monthlyServiceMeetingObj.deleteOne({ _id: task._id }, function (err) {
                            return res.status(400).json({ err: error });
                        });
                        meetingAgendaListObj.deleteOne({ taskId: task._id }, function (err) {
                            return res.status(400).json({ err: error });
                        });
                        return res.status(400).json({ err: error });
                    }
                })
            })

            return res.status(201).json({
                success: true,
                msg: "Task  Successfully Saved",
            });
        }
    });
});


router.route('/add/digitalForm').post(function (req, res) {
    let form = new DigitalMigration(req.body);
    if (err) return res.status(400).json({ err: err })
    form.save()
        .then(form => {
            res.status(200).json({ 'digital_form': 'form in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

router.post('/', (req, res) => {
    const newItem = new DigitalMigration({
        name: req.body.DigitalMigration
    });
    newItem.save().then(item => res.json(item))
});


// @route   GET api/items
// @des     Get All Items
// @access  Public 

router.get('/', (req, res) => {
    DigitalMigration.find()
        .then(items => res.json(items));
});
router
module.exports = router;