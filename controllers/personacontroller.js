var mongoose = require('mongoose');
var Persona = require ('../models/personal');
const upload = require('../public/javascripts/guardafoto');

 
var personalController = {};

 personalController.list = function(req,res) {
    Persona.find({}).exec(function(err,personal){
        if(err) {console.log('Error:',err);return;}
        res.render('../views/personal/index',{personal:personal});
    });
 };


 personalController.show = function(req,res) {
    Persona.findOne({_id: req.params.id}).exec(function(err,personal){
        if(err) {console.log('Error:',err);return;}
        console.log(personal);
        res.render('../views/personal/show',{personal:personal});
    });
};


personalController.edit = function(req,res) {
    Persona.findOne({_id: req.params.id}).exec(function(err,personal){
        if(err) {console.log('Error:',err);return;}
        res.render('../views/personal/edit',{personal:personal});
    });
};

function valorsexo(valor) {
    if (valor == 0) return false;
    else return true;
}

personalController.update = function(req,res) {
    Persona.findByIdAndUpdate(req.params.id,{$set: {
        codigo : req.body.codigo,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        sexo: valorsexo(req.body.sexo),
        calle: req.body.calle,
        nro: req.body.nro,
        piso: req.body.piso,
        puerta: req.body.puerta,
        correo: req.body.correo,
        telefono: req.body.telefono
    }},{new:true,runValidators:true},
    function(err,personal){
        if(err) {
            console.log('Error:',err);
            return res.render('../views/personal/edit',{personal:req.body});  
        } else {
            res.redirect('/personal/show/'+personal._id);
        }
    });
};



personalController.create = function(req,res) {

};


personalController.save = function(req,res) {
    var persona = new Persona(req.body)
    persona.save(function(err){
            if(err) {
                console.log('Error:',err);
                return res.render('../views/personal/create',{personal:req.body,problema:listaerrores.substring(1)}); 
            } else {
        res.redirect("/personal");
        }
    })
}




personalController.delete = function(req,res) {
    Persona.remove({_id:req.params.id}, function(err) {
        if (err) {console.log('Error: ',err);return;}
        res.redirect("/personal");
    })
}







 module.exports = personalController;   