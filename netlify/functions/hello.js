// import https from "https"
const https = require('https');
// import fs from "fs"
const fs = require('fs');
// import axios from "axios";
const axios = require('axios');

// essentially an AWS LAMBDA

exports.handler = async (event, context) => {

    // const data = {
    //     hello: 'hello world!'
    // };

    const pfx = require(`../../files/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12`);
    // const pfx = fs.readFileSync('TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12');
    const passphrase = '18XFL6K3ZJ3HKMCJTY7CLT3RRH';
    const agent = new https.Agent({ pfx, passphrase })

    axios.get('https://api.certification.blackhawknetwork.com/eGiftManagement/v1/eGift/HYZW10690X0S2MTB95CX35AH2C', {
        httpsAgent: agent
    })
    // .then(response => response.json())
    .then((response) => {
        // console.dir(response.data, { depth: null })
        // console.log(response.data);
        // res.status(200).json({
        //     response
        // })
        // res.status(200).send(response.data)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    }).catch(error => {
        console.log(error)
        res.send({error})
    })

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(data),
    // };
}