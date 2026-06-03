const nombre ="Kristal";
let apellido = "Trinidad";
console.log (nombre);
console.log(apellido);

// nombre = "Neri"; genera error ya que nombre es una constante
apellido ="Martínez";
console.log(apellido);

//objetos de javascript
const persona = {
    nombre: "Angel",
    apellido: "Obil",
    edad: 18,
    apodos: [
        "Obil",
        "Nene tóxico"
    ]
};
persona.apellido = "Obil Bahena" // los atributos de un objeto pueden cambiar aunque el objeto este declarado como constante
console.log(persona.apellido);
console.log("============Fin Objetos===============");

//Funciones JavaScript
/*function saludar (nombre){
    return "Hola "+ nombre;
}*/

/*const saludar = (nombre) =>{
     return "Hola "+ nombre;
}*/

const saludar = nombre =>  //solo funciona cuando hay menos de una linea
     "Hola "+ nombre;

const saludo = saludar (persona.apellido); //Hola Kristal
console.log(saludo);

console.log("============Fin Funciones===============");
console.log("============Listas ===============");

const listaNumeros = [
    5,10,3,8,9
];
console.log (listaNumeros);
listaNumeros [3]= 7;
console.log (listaNumeros);

const numerosMutiplicados = listaNumeros.map( (numeroEnElQueVoy) =>{
     return numeroEnElQueVoy*3
    }
);
console.log(numerosMutiplicados);