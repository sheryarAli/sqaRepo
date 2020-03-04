const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const DigitalMigrationSchema = new Schema({
    digitalFormId:  { type: Schema.Types.ObjectId, ref: 'digitalForm', required: true },

    staffName: {
        type: String,
    },
    staffDesignation: {
        type: String,
    },
    accountNumber: {
        type: String,
    },
    accountTitle: {
        type: String,
    },
    contactNumber: {
        type: String,
    },
    customerSetType: {
        type: String,
    },
    pitched: {
        type: String,
    },
    newRequest: {
        type: String,
    },
    delivered: {
        type: String,
    },
    activated: {
        type: String,
    },
    appPitched: {
        type: String,
    },
    downloadedCustomer: {
        type: String,
    },
    ussdBanking: {
        type: String,
    },
    ivr: {
        type: String,
    },
    liveChat: {
        type: String,
    },
    smsBanking: {
        type: String,
    },
    contactCentre: {
        type: String,
    },
    adcChannels: {
        type: String,
    },
    firstSocialMedia: {
        type: String,
    },
    newDespositAccount: {
        type: String,
    },
    healthInsurance: {
        type: String,
    },
    overallProductSelling: {
        type: String,
    },
    depositMobilized: {
        type: String,
    },
    bookletProvided: {
        type: String,
    },
    financialLitercy: {
        type: String,
    },
    kfsProvided: {
        type: String,
    },
    complaintLodgment: {
        type: String,
    },
},
    {
        collection: 'digitalFormList'

    });


module.exports = DigitalMigration = mongoose.model('DigitalFormList', DigitalMigrationSchema);