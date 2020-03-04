const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/ScdHo.js');

// @route   POST api/items
// @des     Create an Item
// @access  Public 
{
    console.log("api Called SoapCall")
}

function callWebService() {
    console.log("callWebService Called")
    // var soap = require('tinysoap')
    // var url = 'http://192.168.11.31:7001/DFSApp_UAT/ADAndCBSAuthenticationWS?wsdl';
    // var args = { user_name: 'sajajd-1418', base64_encoded_password: 'Zm1mYkAyMDE5' };
    // soap.createClient(url, function (err, client) {
    //     client.MyFunction(args, function (err, result) {
    //         console.log(result);
    //     });
    // });
    const url = "http://localhost:8081/app.fmfb-v1/ADAndCBSAuthentication";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    const payload = {
        user_name: 'mohsin-4088',
        password: 'fmfb@2018'

    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: headers

    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

router.route('/soapcall').post(function (req, res) {
    console.log("post soap called");
    var post_data = req.body;
    callWebService
    console.log(post_data);
});

// router.post('/', (req, res) => {
//     const newItem = new Item({
//         name: req.body.Item
//     });
//     newItem.save().then(item => res.json(item))
// });


// @route   GET api/items
// @des     Get All Items
// @access  Public 

// router.get('/', (req, res) => {
//     Item.find()
//         .then(items => res.json(items));
// });
router
module.exports = router;