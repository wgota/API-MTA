const express = require('express');
const gamedig = require('gamedig');

const app = express();

app.get('/server/:ip/:port', (req, res) => {
    const { ip, port } = req.params;
    gamedig.query({
        type: 'mtasa',
        host: ip,
        port: port
    }).then((state) => {
        res.json(state);
    }).catch((error) => {
        res.status(500).json({error: error.message});
    });
});

app.get('/', (req, res) => {
    res.statusMessage("/server/:ip/:port");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Server running on port 3000');
    console.log('Server running on port 3000');
    console.log('Server running on port 3000');
    console.log('Server running on port 3000');
    console.log('Server running on port 3000');
    console.log('Server running on port 3000');
    console.log('Server running on port 3000');
});