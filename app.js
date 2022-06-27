//calcularPuntaje(facil, normal, dificil)
//Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

//facil: 3 puntos //
//normal: 5 puntos  // 
//dificil: 10 puntos

//calcularPuntaje(3, 0, 0) // 9       //3 de 3, 0 de 5 y 0 de 10
//calcularPuntaje(0, 2, 1) // 20      //0 de 3, 2 de 5 y 1 de 10
//calcularPuntaje(5, 1, 2) // 40      //5 de 3, 1 de 5 y 2 de 10

const calcularPuntaje = (facil, normal, dificil) =>{
       return 3 * facil + 5 * normal + 10 * dificil;
}
   
console.log(calcularPuntaje(3, 0, 0));
console.log(calcularPuntaje(0, 2, 1));
console.log(calcularPuntaje(5, 1, 2));
