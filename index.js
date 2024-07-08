require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.error(err)
});

//Servidor contenido estático
app.use(express.static('public'));

app.get('/',  (req, res)=> {
    res.render('home', {
        nombre: 'Diana Pineda',
        titulo: 'Curso Node'
    });
});

app.get('/generic', (req, res)=> {
    res.render('generic', {
        nombre: 'Diana Pineda1',
        titulo: 'Curso Node1'
    });
});

app.get('/elements',  (req, res) =>{
    res.render('elements', {
        nombre: 'Diana Pineda2',
        titulo: 'Curso Node2'
    });
});





app.get('/hola-mundo', function (req, res) {
    res.send('Hello World en su ruta')
});
// console.log(__dirname);

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



