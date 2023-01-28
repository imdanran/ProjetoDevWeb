const express = require ("express");
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) =>{
    let obj = {
        nome: req.query.nome,
    }
    res.render('home', obj)
});

router.get('/rota2', (req, res) => {
    fs.readFile('horario.json', 'utf8', (err, data) => {
        if (err) throw err;
        let obj = JSON.parse(data);
        res.render('segunda', obj)
    });
});

router.get('/rota3', (req, res) => {
    fs.readFile('grade.json', 'utf8', (err, data) => {
        if (err) throw err;
        let obj = JSON.parse(data);
        res.render('terceira', obj)
    });
});
module.exports = router;