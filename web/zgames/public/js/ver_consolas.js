const cargarMarcas = async ()=>{
    //1Ir a buscar el filtro-cbx
    let filtroCbx = document.querySelector("#filtro-cbx")
    //2 ir a buscar las marcas
    let marcas = await getMarcas();
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroCbx.appendChild(option);
    });
}

const iniciarEliminacion = async function(){
    //1 OBtener el id a eliminar
    let id = this.idConsola;
    let resp = await Swal.fire({title:"Esta seguro?",text:"Esta operacion es irreversible",icon:"Error",showCancelButton:true});
    if(resp.isConfirmed){
        //1. eliminar
        if(await eliminarConsola(id)){
            //2. si la eliminacion fue exitosa, recargar tabla
            let consolas = await getConsolas();
            cargarTabla(consolas);
            Swal.fire("Consola eliminada", "Consola eliminada exitosamente", "info");
        }else{
                //3. si la eliminacion no se hace mostrar mensaje
                Swal.fire("Cancelado", "Cancelado a peticion del usuario","info");
        }
    }else{
     swal.fire("Cancelado", "Canceladada toa la weaaaaa tyoy pa laa cagaa", "info");
    }


}

const cargarTabla = (consolas)=>{
    //1 OObtener referencia al cuerpo de la tabla
    let  tbody = document.querySelector("#tbody-consola");
    tbody.innerHTML = "";
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
    botonEliminar.addEventListener("click",iniciarEliminacion);
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


document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{

    let filtro = document.querySelector("#filtro-cbx").value;
    let consolas = await getConsolas(filtro);
    cargarTabla(consolas);
});

document.addEventListener("DOMContentLoaded", async()=>{
    //Aqui voy a cargar la tabla.
    await cargarMarcas();
    let consolas = await getConsolas();
    cargarTabla(consolas);
});