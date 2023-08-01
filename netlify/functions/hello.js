// import https from "https"
const https = require('https');
// import fs from "fs"
const fs = require('fs');
// import axios from "axios";
const axios = require('axios');
const fetch = require("node-fetch");
// const pfx = require.resolve('../../src/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12')
// essentially an AWS LAMBDA

exports.handler = async (event, context) => {

    
    // const pfx = require(`../../files/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12`);

    // const pfx = require('../../TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12')

    // const pfx = fs.readFileSync('./files/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12');
    // const pfx = fs.readFileSync('TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12');

    const pfx = require.resolve('../../src/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12')

    const passphrase = '6LNGQ4BGCCRJ2KDZHTTATFV2FR';
    const agent = new https.Agent({ pfx, passphrase })

    fetch('https://api.certification.blackhawknetwork.com/productCatalogManagement/v1/productCatalogs', {
        httpsAgent: agent
    })
    // .then(response => response.json())
    .then(response => {
        console.log('response...')
        console.log(response)

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