const {cursos, mostrarCursos, mostrarCursos1, mostrarCursos2, mostrarCursos3} = require('./cursos');
const fs= require('fs');
var express= require('express')
var app = express()
const inscripcion ={
	nombre:{
		demand:true,
		alias: 'n'
	},
	cedula:{
		demand:true,
		alias: 'c'
	},
	identificador:{
		demand:true,
		alias: 'ide'
	}
};

const argv =  require('yargs')
.command('inscribir','Realizar inscripcion', inscripcion)
.argv;

if (argv.ide==null) {
	mostrarCursos();
}else{
	if (cursos.primero.identificador==argv.ide) {
		mostrarCursos1();
		mostrarNavegador(cursos.primero);
	}else{
		if (cursos.segundo.identificador==argv.ide) {
			mostrarCursos2();
			mostrarNavegador(cursos.segundo);
		}else{
			if (cursos.segundo.identificador==argv.ide) {
			 mostrarCursos3();
			 mostrarNavegador(cursos.tercero);
			}else{
				console.log('No existe el curso');
				mostrarCursos();
			}
		}
	};
};


function mostrarNavegador(curso){
	texto = 'Curso de '+curso.nombre+' con duración de '+
	curso.duracion+' tiene valor de '+curso.valor+' pesos id-'+curso.identificador+'\n'+
	'interesado '+argv.nombre+' cedula '+argv.cedula;
	app.get('/', function (req, res){
	res.send(texto)
	})
	app.listen(3000)
}