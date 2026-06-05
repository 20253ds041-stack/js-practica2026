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
const btnPromedio = document.getElementById("btn-pronmedio");
const seccionPromedio = document.getElementById("resultado-promedio");


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

//Llamadas a funciones

renderizarLista(estudiantes); //lamamos la lista de estudiantes con la funcion de renderizar lista
