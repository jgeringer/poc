import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import 'dotenv/config'
import { Certificate } from "crypto"

import fetch from "node-fetch"
import https from "https"
import fs from "fs"
import path from "path"
import axios from "axios"

interface ContactBody {
    message: string
}

export default function handler(
    req: GatsbyFunctionRequest<ContactBody>,
    res: GatsbyFunctionResponse
) {
    const pfx = fs.readFileSync(`${process.env.BLACKHAWK_CERTIFICATE}`);
    const passphrase = `${process.env.BLACKHAWK_CERTIFICATE_PASSPHRASE}`;
    const agent = new https.Agent({ pfx, passphrase })
    
    axios.get(`${process.env.BLACKHAWK_URL}`, {
        httpsAgent: agent
    })
    // .then(response => response.json())
    .then((response) => {
        // console.dir(response.data, { depth: null })
        // console.log(response.data);
        // res.status(200).json({
        //     response
        // })
        res.status(200).send(response.data)
    }).catch(error => {
        console.log(error)
        res.send({error})
    })
}
