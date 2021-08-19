var express = require('express');
var router = express.Router();
//ver plantillas
var visualizar = require('../controller/ver_plantillas');
var visualizarController = new visualizar();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'RegisterFlash',
    fragmentos: 'pagePrin/pageprincipal'
  });
});

module.exports = router;
