const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Categoria');

const Categoria = mongoose.model('categorias');


router.get('/', (req, res)=>{
    //res.send('pagina principal do admin');
    res.render('admin/index');
});

router.get('/posts', (req, res)=>{

    res.send('pagina de posts');
});


router.get('/categorias', (req, res) =>{

    //res.send('pagina de categorias');
    res.render('admin/categorias');
});

router.get('/categorias/add', (req, res)=>{

    res.render('admin/addcategorias');
})


router.post('/categorias/nova', (req, res)=>{

    let novaCategoria = {

        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(()=>{

        console.log('cadastrado com sucesso');
    }).catch(e=>{
        console.log('error' + e);
    });

});



module.exports = router;