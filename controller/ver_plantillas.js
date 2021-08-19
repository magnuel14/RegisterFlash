'use strict';
class ver_plantillas {
    verUsu(req, res) {
        res.render('index', {
            title: 'Form',
            fragmentos: "Principal/headerU"

        });

    }

    verCamera(req, res) {
        res.render('index', {
            title: 'Tomate una foto',
            fragmentos: "usuario/rCmara"

        });
    }



}
module.exports = ver_plantillas;