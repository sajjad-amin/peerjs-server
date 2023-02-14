require('dotenv').config();
const fs = require('fs');
const { PeerServer } = require('peer');
const sslEnabled = process.env.SSL_ENABLED === 'true';
let peerConfig = {
    port: process.env.PORT,
}
if (sslEnabled) {
    peerConfig.ssl = {
        key: fs.readFileSync(process.env.SSL_KEY),
        cert: fs.readFileSync(process.env.SSL_CERT)
    }
}
const peerServer = PeerServer(peerConfig);