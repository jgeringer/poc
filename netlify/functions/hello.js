// import https from "https"
const https = require('https');
// import fs from "fs"
const fs = require('fs');
// import axios from "axios";
const axios = require('axios');
const fetch = require("node-fetch");
// essentially an AWS LAMBDA

exports.handler = async (event, context) => {

    // const data = {
    //     hello: 'hello world!'
    // };

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: 'hello world'
    //     })
    // }

    
    const pfx = require(`../../files/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12`);
    // const pfx = require('../../files/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12')
    // const pfx = fs.readFileSync('./files/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12');
    // const pfx = fs.readFileSync('TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12');
    const passphrase = '18XFL6K3ZJ3HKMCJTY7CLT3RRH';
    const agent = new https.Agent({ pfx, passphrase })

    fetch('https://api.certification.blackhawknetwork.com/eGiftManagement/v1/eGift/HYZW10690X0S2MTB95CX35AH2C', {
        httpsAgent: agent
    })
    .then(response => response.json())
    .then(response => {
        // console.dir(response, { depth: null })

        // res.status(200).json({
        //     response
        // })
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    }).catch(error => {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
        // res.status(500).json({
        //     error
        // })
    })

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(data),
    // };

    
}