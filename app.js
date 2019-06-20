
//carregando modulos
    const express = require('express');

    const handlebars = require('express-handlebars');

    const bodyParser = require('body-parser');
    const app = express();

    const admin = require('./routes/admin');

    const path = require('path');

    const mongoose = require('mongoose');

    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://localhost/blogapp', { useNewUrlParser: true }).then(()=>{

        console.log('conectou');
    }).catch(e=>{

        console.log('erro ao conectar: ' + e);
    });

//config

    app.use(express.static(path.join(__dirname, 'public')));

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

//rotas

    app.use('/admin', admin);

//outros

    const porta = 8082;

    app.listen(porta, ()=>{
        console.log('servidor rodando');
    });