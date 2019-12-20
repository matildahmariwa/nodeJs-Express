const http = require('http'); // Import Node.js core module
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let employees=[];
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/employees', (req, res) => {
    res.json(employees);
});

    app.get('/', function (req, res) {
        res.send('This is the homepage!');
    });
app.get('about', function (req, res) {
    res.send('This is the about page');
});
app.get('/contact', function (req, res) {
    res.send('contact us here');
});
app.post('/employee', (req, res) => {
    const employee = req.body;

    // Output the book to the console for debugging
    console.log(employee);
    employees.push(employee);

    res.send('A new employee has been created');
});
 app.listen(3000, () =>{
     console.log('Node.js web server at port 3000 is running..')
 })


