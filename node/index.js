const express = require('express')
const peopleinsert = require('./peopleinsert')
const peopleselect = require('./peopleselect')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    peopleinsert.setPeople();
    peopleselect.getPeoples((con, rows) => {
        res.write(
            "<h1>Full Cycle</h1>"+
            "<br/>"+
            "<p><b>People Listt</b></p>");

        var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))            

        for (let index = 0; index < resultArray.length; index++) {
            const element = resultArray[index];
            res.write(element.name+"<br/>");
        }
        res.end();
        con.end();
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

