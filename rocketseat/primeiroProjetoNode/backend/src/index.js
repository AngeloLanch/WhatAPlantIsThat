const express = require('express');

const app = express();
const

app.get('/project', (req, res) => {
    return res.json(project);
});

app.post('/project', (req, res) => {
    return res.json({Messege: 'Hello World'});
});

app.pull('/project/:id', (req, res) => {
    return res.json({Messege: 'Hello World'});
});

app.delete('/project/:id', (req, res) => {
    return res.json({Messege: 'Hello World'});
});

app.listen(3333, () => {
    console.log('foi 👌')
});

