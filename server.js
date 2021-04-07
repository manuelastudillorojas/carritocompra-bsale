const express = require('express');
const path = require('path');
const mysql = require('mysql');
const morgan = require('morgan');
const myConection = require('express-myconnection');
const hbs = require('hbs');
const app = express();



const port = process.env.PORT || 3000;




// view engine setup

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');



// expre HBS Eengine 

require('./src/hbs/helpers');
hbs.registerPartials(path.join(__dirname, "src/views/parciales"));
//


//importando Routes
const productoRoutes = require('./src/router/productos')

//middlewares

app.use(morgan('dev'));
app.use(myConection(mysql, {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    port: '3306',
    database: 'bsale_test'

}, 'single'));


//routes
app.use('/', productoRoutes);

//static files
app.use(express.static(path.join(__dirname, 'src/public')));







/*
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'fernando',

    })
})

app.get('/about', function(req, res) {
    res.render('about', )
})


*/






app.listen(port, () => { console.log('PROBANDO') })