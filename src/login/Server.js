
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//route to homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

//route to login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

//post requests
app.post('/login', (req, res) => {
    //login code
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});

const port = 3001;

app.listen(port, () => console.log(`This app is listening on port ${port}`));




