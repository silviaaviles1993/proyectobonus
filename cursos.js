let cursos ={
	primero:{
		identificador:1,
		nombre:'Inglés',
		duracion:'20 hrs',
		valor:500000
	},
	segundo:{
		identificador:2,
		nombre: 'Matemáticas',
		duracion:'40 hrs',
		valor:100000
	},
	tercero:{
		identificador:3,
		nombre: 'Programación',
		duracion:'80 hrs',
		valor:200000
	}
}

let mostrarCursos=()=>{
	setTimeout(function(){
	console.log('Lista de cursos');
	console.log('Curso de '+cursos.primero.nombre+' con duración de '+
	cursos.primero.duracion+' tiene valor de '+cursos.primero.valor+' pesos id-'+cursos.primero.identificador);
	mostrarCursos2();
	mostrarCursos3();
	}, 2000);
}

let mostrarCursos1=()=>{
	setTimeout(function(){
	console.log('Curso de '+cursos.primero.nombre+' con duración de '+
	cursos.primero.duracion+' tiene valor de '+cursos.primero.valor+' pesos id-'+cursos.primero.identificador);
	}, 2000);
}

let mostrarCursos2=()=>{
	setTimeout(function(){
	console.log('Curso de '+cursos.segundo.nombre+' con duración de '+
	cursos.segundo.duracion+' tiene valor de '+cursos.segundo.valor+' pesos id-'+cursos.segundo.identificador);
	}, 2000);
}

let mostrarCursos3=()=>{
	setTimeout(function(){
	console.log('Curso de '+cursos.tercero.nombre+' con duración de '+
	cursos.tercero.duracion+' tiene valor de '+cursos.tercero.valor+' pesos id-'+cursos.tercero.identificador);
	}, 4000);
}

module.exports = {
	cursos,
	mostrarCursos,
	mostrarCursos1,
	mostrarCursos2,
	mostrarCursos3
};