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

// cuerpo de la tabla
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
plantas.forEach(planta => {
    agregarFila(planta);
});

// botoncito para agregar una nueva planta
const form = document.getElementById("addPlantForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const nombreCientifico = document.getElementById("nombreCientifico").value;
    const clima = document.getElementById("clima").value;

    const nuevaPlanta = { nombre, nombreCientifico, clima };
    plantas.push(nuevaPlanta);
    agregarFila(nuevaPlanta);

    form.reset();  // Importante Fer!!! Con esto reseteas el formulario
});
