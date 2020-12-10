var express = require('express');
var app = express();
var data =  require('./employee.json');

app.get('/employees', (req, res) => {
    if(!data) {
        res.status(404).send('No information found')
    };
    res.send(data);
});

app.get('/employees/:id', (req, res) => {
    const findEmployee = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    });

    if(!findEmployee) {
        res.status(404).send('No information found')
    };

    res.send(findEmployee);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});