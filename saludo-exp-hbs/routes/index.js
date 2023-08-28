var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina inicial' });
});
router.post('/', function(req, res, next){
  res.render('saludar', { title: 'Saludo', nombre: req.body.nom});
});
module.exports = router;