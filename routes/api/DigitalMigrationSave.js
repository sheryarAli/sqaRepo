

const express = require('express');
const router = express.Router();

// Item Model
const DigitalMigration = require('../../models/DigitalMigrationForm');
const DigitalMigrationList = require('../../models/DigitalMigrationList');

// @route   POST api/items
// @des     Create an Item
// @access  Public 


router.route('/digitalMigration').post(function (req, res) {

    var digitalFormObj = new DigitalMigration({ date: req.body.formData.date, branchCode: req.body.formData.branchCode, branchName: req.body.formData.branchName });
    digitalFormObj.save(function (err, digitalForm) {
        if (err) return res.status(400).json({ err: err })
        if (digitalForm) {
            req.body.formData.digitalFormList.map((digitalFormList, index) => {
                var digitalMigrationListObj = new DigitalMigrationList({
                    digitalFormId: digitalForm._id,
                    staffName: digitalFormList.staffName,
                    staffDesignation: digitalFormList.staffDesignation,
                    accountNumber: digitalFormList.accountNumber,
                    accountTitle: digitalFormList.accountTitle,
                    contactNumber: digitalFormList.contactNumber,
                    customerSetType: digitalFormList.customerSetType,
                    pitched: digitalFormList.pitched,
                    newRequest: digitalFormList.newRequest,
                    delivered: digitalFormList.delivered,
                    activated: digitalFormList.activated,
                    appPitched: digitalFormList.appPitched,
                    downloadedCustomer: digitalFormList.downloadedCustomer,
                    ussdBanking: digitalFormList.ussdBanking,
                    ivr: digitalFormList.ivr,
                    liveChat: digitalFormList.liveChat,
                    contactCentre: digitalFormList.contactCentre,
                    adcChannels: digitalFormList.adcChannels,
                    firstSocialMedia: digitalFormList.firstSocialMedia,
                    newDespositAccount: digitalFormList.newDespositAccount,
                    overallProductSelling: digitalFormList.overallProductSelling,
                    depositMobilized: digitalFormList.depositMobilized,
                    bookletProvided: digitalFormList.bookletProvided,
                    financialLitercy: digitalFormList.financialLitercy,
                    kfsProvided: digitalFormList.kfsProvided,
                    complaintLodgment: digitalFormList.complaintLodgment
                });

                digitalMigrationListObj.save((error, savedTask) => {
                    if (err) {
                        digitalFormObj.deleteOne({ _id: task._id }, function (err) {
                            return res.status(400).json({ err: error });
                        });
                        digitalMigrationListObj.deleteOne({ taskId: task._id }, function (err) {
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