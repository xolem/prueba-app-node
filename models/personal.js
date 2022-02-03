var mongoose = require('mongoose');
const beutifyUnique = require('mongoose-beautiful-unique-validation');
var Schema = mongoose.Schema;

var personalSchema = new Schema({
    codigo: {type:String,required:true,unique:' Dos trabajadores no pueden tener el codigo: ({VALUE})'},
    dni: {type:String,max:9},
    nombre: {type:String,max:20},
    apellidos: {type:String,max:20},
    sexo: {type:Boolean},
    calle: {type:String,max:50},
    nro: {type: Number},
    piso: {type:String,max:3},
    puerta: {type:String,max:3},
    correo: {type:String,max:20},
    telefono: {type:String,max:11}
})  
personalSchema.plugin(beutifyUnique);
var collectionName = 'personas';
module.exports = mongoose.model('',personalSchema,collectionName);
