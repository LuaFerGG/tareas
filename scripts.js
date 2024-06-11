// aqui van los datos iniciales de la tabla
const plantas = [
    { nombre: "Rosa", nombreCientifico: "Rosa spp.", clima: "Templado" },
    { nombre: "Cactus", nombreCientifico: "Cactaceae", clima: "Árido" },
    { nombre: "Orquídea", nombreCientifico: "Orchidaceae", clima: "Tropical" },
    { nombre: "Lavanda", nombreCientifico: "Lavandula", clima: "Mediterráneo" },
    { nombre: "Bambú", nombreCientifico: "Bambusoideae", clima: "Subtropical" },
    { nombre: "Girasol", nombreCientifico: "Helianthus annuus", clima: "Templado" },
    { nombre: "Aloe Vera", nombreCientifico: "Aloe barbadensis miller", clima: "Árido" },
    { nombre: "Hortensia", nombreCientifico: "Hydrangea", clima: "Templado" },
    { nombre: "Menta", nombreCientifico: "Mentha", clima: "Templado" },
    { nombre: "Helecho", nombreCientifico: "Pteridophyta", clima: "Húmedo" }
];
// adding this line to understand the var type "plantas"
console.log("type of plantas:", typeof plantas);

// cuerpo de la tabla
// consider read this article about query selectors
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const tbody = document.querySelector("#plantTable tbody");

// Función para agregar una fila a la tabla
function agregarFila(planta) {
    const row = document.createElement("tr");

    const cellNombre = document.createElement("td");
    cellNombre.textContent = planta.nombre;
    row.appendChild(cellNombre);

    const cellNombreCientifico = document.createElement("td");
    cellNombreCientifico.textContent = planta.nombreCientifico;
    row.appendChild(cellNombreCientifico);

    const cellClima = document.createElement("td");
    cellClima.textContent = planta.clima;
    row.appendChild(cellClima);

    tbody.appendChild(row);
}


// inicia la tabla con los datos
// consider use for or while to understand better the loops
// for example
// for (let i=0; i<plantas.length; i++) {
//     console.log('i', i);
//     const planta = plantas[i];
//     console.log('planta', planta);
//     agregarFila(planta);
// }
plantas.forEach(planta => {
    agregarFila(planta);
});

// botoncito XDD para agregar una nueva planta
const form = document.getElementById("addPlantForm");
form.addEventListener("submit", function(event) {
    //Pretty good
    //This helps to avoid the default redirection
    //Read more in
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    event.preventDefault();

    //Getting the values is a bad practice this way
    // better solution is to get the element and then get the value
    //This helps with the validation
    const nombre = document.getElementById("nombre").value;
    const nombreCientifico = document.getElementById("nombreCientifico").value;
    const clima = document.getElementById("clima").value;

    const nuevaPlanta = { nombre, nombreCientifico, clima };
    plantas.push(nuevaPlanta);
    agregarFila(nuevaPlanta);

    form.reset();  // Importante Fer!!! Con esto reseteas el formulario PRETTY GOOD
});
