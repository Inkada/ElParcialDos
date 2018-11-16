const express = require('express');
const hbs = require('express-handlebars');
const app = express();

//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->

app.get('/', (req, res) => {

    res.render('paginaB');
})

app.get('/paginaA', (req, res) => {

    res.render('paginaA');
})

app.get('/paginaB', (req, res) => {

    res.render('paginaB');
})

app.get('/paginaC', (req, res) => {

    res.render('paginaC');
})



app.listen(1234, () => {
    console.log("Escuchando en el puerto 1234")

})
