const cargarTabla = (consolas)=>{
    //1 OObtener referencia al cuerpo de la tabla
    let  tbody = document.querySelector("#tbody-consola");
    //2 recorrer toodas las consolas
    for(let i = 0; i < consolas.length; ++i ){

    //3 por cada consola generar una fila
    let tr = document.createElement("tr");
    //4 generar poor cada atributo de lla conola un td
    let tdNombre = document.createElement("td");
    tdNombre.innerText = consolas[i].Nombre;
    let tdMarca = document.createElement("td");
    tdMarca.innerText = consolas[i].marca;
    let tdAnio = document.createElement("td");
    tdAnio.innerText = consolas[i].anio;
    let tdAcciones = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.classList.add("btn","btn-danger");
    botonEliminar.idConsola = consolas[i].id;
    tdAcciones.appendChild(botonEliminar);

    //5 agregar los td al tr
    tr.appendChild(tdNombre);
    tr.appendChild(tdMarca);
    tr.appendChild(tdAnio);
    tr.appendChild(tdAcciones);

    //agregar el tr al cuerpo de la tabla
    tbody.appendChild(tr);

    }
}



document.addEventListener("DOMContentLoaded", async()=>{
    //Aqui voy a cargar la tabla.
    let consolas = await getConsolas();
    cargarTabla(consolas);
});