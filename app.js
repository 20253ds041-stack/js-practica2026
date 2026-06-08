//Declaraciones
const estudiantes = [
  { id: 1, nombre: "Ana Lopez",    nota: 90 },
  { id: 2, nombre: "Carlos Ruiz",  nota: 55 },
  { id: 3, nombre: "Maria Torres", nota: 78 },
  { id: 4, nombre: "Luis Mendez",  nota: 45 },
  { id: 5, nombre: "Sofia Rios",   nota: 88 },
  { id: 6, nombre: "Pedro Soto",   nota: 62 },
];

//Un estudiante
const estudianteX ={
    id: 7,
    nombre: "Lucia Gómez",
    nota:95
};

//Referencias al DOM

const seccionEstudiantes = document.getElementById("lista-estudiantes");
const btnTodos = document.getElementById("btn-todos");
const btnAprobados = document.getElementById("btn-aprobados");
const btnReprobados = document.getElementById("btn-reprobados");
const btnPromedio = document.getElementById("btn-promedio");
const seccionPromedio = document.getElementById("resultado-promedio")
//Seccion de agregar estudiante
const inputNombre = document.getElementById("input-nombre");
const inputNota = document.getElementById("input-nota");
const btnAgregar = document.getElementById("btn-agregar");


//Funciones
const crearTarjeta = (unEstudiante) => { //un estudiante sera el objeto :d
    const estado = unEstudiante.nota >60 ? "Aprobado" : "Reprobado";
    const clase =unEstudiante.nota >60? "aprobado" : "reprobado"; // este sera para el nombre de la clase en css 

    const tarjeta = ` 
    <div class="tarjeta ${clase}">
        <h2>${unEstudiante.nombre}</h2>
        <p>${unEstudiante.nota}</p>
        <p>${estado}</p>
    </div>
    `;//creamos la tarjeta
    return tarjeta; 
}


const renderizarLista = (estudiantesApintar) =>{
    const listaTarjetas = estudiantesApintar.map(
        (unEstudiante)=> {
            const tarjeta = crearTarjeta(unEstudiante);
            return tarjeta;
        }
    );
    seccionEstudiantes.innerHTML = (listaTarjetas.join("")); //joint nos ayudara a agregar cosas en este caso los elementos strings 
}

//Eventos

btnTodos.addEventListener('click',
    ()=>{
        renderizarLista(estudiantes);
    }
);

btnAprobados.addEventListener('click',
    ()=>{
        const aprobados = estudiantes.filter(
            (unEstudianteX) => {
                return unEstudianteX.nota > 60;

            }
        );
          renderizarLista(aprobados)
    }
);

btnReprobados.addEventListener('click',
    ()=>{
        const aprobados = estudiantes.filter(
            (unEstudianteX) => {
                return unEstudianteX.nota < 61;

            }
        );
          renderizarLista(aprobados)
    }
);

        //10 elevado al número de decimales que deseas conservar

       const toFixedtrunc = (num, decimales) => {
            //multiplica, cota decimales restantes y resuelve y vuelve a dividir
            const factor =Math.pow (10, decimales);
            //retorna el string con el formato fijo final sin redondear
            const truncado =Math.trunc (num*factor)/factor;
            return truncado.toFixed(decimales);
       };

btnPromedio.addEventListener('click',
    ()=>{
        const sumaNotas = estudiantes.reduce(
            (valorPersistente, estudiante) => {
                return valorPersistente+estudiante.nota;
            },
        0);
        const promedio =sumaNotas/ estudiantes.length;
        seccionPromedio.innerHTML= "Promedio: "+ toFixedtrunc(promedio,2); //redondeo de decimales 
        seccionPromedio.style.display = "block";


});


btnAgregar.addEventListener('click',
    () => {
        const nombre = inputNombre.value.trim(); //nos ayuda a quitar los espacios innecesarios en el texto
        const nota = parseInt(inputNota.value.trim()); //parse int para convertir los strings a enteros

        if (nombre === "" || isNaN(nota)|| nota <0 || nota >100){ //el isNaN se referia o nos ayudara a saber si el numero o lo ingresado es algo válido
            alert ("Por favor, ingresa un nombre válido y una nota entre 0 a 100")
            return;
        }
        const nuevoEstudiante ={
            id: estudiantes.length+1,
            nombre: nombre,
            nota : nota, //en estos casos donde se llamen igual podremos solo poner nombre, nota}
        };
        estudiantes.push(nuevoEstudiante); // el push nos ayudara a meter el nuevo objeto a la lista de estudiantes
        renderizarLista(estudiantes)
        inputNombre = "";
        inputNota = "";
    }
);

//Llamadas a funciones

renderizarLista(estudiantes); //lamamos la lista de estudiantes con la funcion de renderizar lista
