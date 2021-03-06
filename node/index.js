const express = require('express')
const app = express()
const port = 3000
const peoplecreate = require('./peoplecreate')
const peopleinsert = require('./peopleinsert')
const peopleselect = require('./peopleselect')

app.get('/', (req,res) => {
    peopleinsert.setPeople();
    peopleselect.getPeoples((con, rows) => {
        res.writeHead(200, {'Content-Type': 'text/html'});        
        res.write(
            "<h1>Full Cycle</h1>"+
            "<br/>"+
            "<p><b>People List</b></p>");

        rows.forEach(element => {
            res.write("<li>"+element.name+"</li>\n");
        });
        con.end();
        res.end();
    });
})

peoplecreate.createTable();
console.log('Tabela criada com sucesso! ')

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

