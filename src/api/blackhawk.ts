import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import 'dotenv/config'

import fetch from "node-fetch"
import https from "https"
import fs from "fs"
import path from "path"

interface ContactBody {
    message: string
}

export default function handler(
    req: GatsbyFunctionRequest<ContactBody>,
    res: GatsbyFunctionResponse
) {
    const pfx = fs.readFileSync(`https://joegeringer.com/TEMP-BHN-Sandbox-DDP-US-API-CertificationService-GW.p12`);
    const passphrase = `${process.env.BLACKHAWK_CERTIFICATE_PASSPHRASE}`;
    const agent = new https.Agent({ pfx, passphrase })
    
    fetch(`${process.env.BLACKHAWK_URL}`, {
        agent
    })
    .then(response => response.json())
    .then(response => {
        console.dir(response, { depth: null })

        res.status(200).json({
            response
        })
    }).catch(error => {
        console.log(error)
        res.send({error})
    })
}
