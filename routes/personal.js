var express = require('express');
var router = express.Router();
const upload = require('../public/javascripts/guardafoto');
var persona = require('../controllers/personacontroller');


router.get('/',persona.list);
router.get('/show/:id',persona.show);


router.get('/edit/:id',persona.edit);
router.post('/update/:id',upload.single('foto'),persona.update);

router.get('/create',persona.create);
router.post('/save',upload.single('foto'),persona.save);

router.get('/edit/:id',persona.edit);
router.post('/update/:id',upload.single('foto'),persona.update);
 
module.exports = router;