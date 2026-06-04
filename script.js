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

const numerosEnObjetos = listaNumeros.map(
    (numeroEnElQueVoy) =>{
        return {
           valor: numeroEnElQueVoy //Creamos un objeto con una nueva funcion
        };
    }
);
console.log (numerosEnObjetos);

//funcion filter

const numerosX = [90,70,30,10,50];
const numerosFiltrados = numerosX.filter(
    (numX) => { // devolvera numeros mayores a 50 y los asignara a una nueva lista
        return numX > 50;
    }
)
console.log(numerosFiltrados);

const personas = [
    {
        nombre: "Neri",
        edad:19
    },{
        nombre: "Mateo",
        edad:18 
    },{
        nombre: "Asael",
        edad:15
    }
];
const personasMayores = personas.filter(
    (personaX) => {
        return personaX.edad>17;
    }
)
console.log(personasMayores);

//funciones reduce sumas o acumulaciones

const numerosY = [3,6,9,12,16];
/*const numerosYSuma = numerosY.reduce(
    (variablePersistente, elemento) => {
        variablePersistente = variablePersistente + elemento;
        return variablePersistente;

    },
    0
);  // Esta es otra manera de escribir la funcion anterior*/
const numerosYSuma = numerosY.reduce(
    (variablePersistente, elemento) => 
       variablePersistente + elemento
    ,
    0
);

console.log(numerosYSuma);
