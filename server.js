const express = require('express');
const app = express();

const os = require('os');

app.get('/hostname',
        (req, res) => res.send(`this server name = ${os.hostname()}`));

app.listen(8080);
