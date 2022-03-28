const express = require('express')
const app = express()
const port = 3000
const peoplecreate = require('./peoplecreate')
const peopleinsert = require('./peopleinsert')
const peopleselect = require('./peopleselect')

app.get('/', (req,res) => {
    peoplecreate.createTable();
    peopleinsert.setPeople();
    peopleselect.getPeoples((con, rows) => {
        res.write(
            "<h1>Full Cycle</h1>"+
            "<br/>"+
            "<p><b>People List</b></p>");

        rows.forEach(element => {
            res.write("<li>"+element.name+"</li>");
        });
        res.end();
        con.end();
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

