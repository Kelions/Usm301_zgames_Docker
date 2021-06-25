const cargarMarcas = async()=>{
    //1 buscar las marcas a la api
    let resultado = await axios.get("api/marcas/get")
    let marcas = resultado.data;
    //2. cargar las marcas dentro del select

    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m => {
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);
        });

};
cargarMarcas();

document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let marca = document.querySelector("#marca-select").value;
    let anio = document.querySelector("#anio-txt").value;
    let consolas = {};
    consolas.nombre = nombre;
    consolas.marca =marca;
    consolas.anio = anio;
    //Falta validar todo
    //1. va al controlador  y le pasa los datos
    //2. el controlador crea el modelo
    //3. el modelo ingresa a la base de datos
    let res = await crearConsolas(consolas);
    Swal.fire("consola creada","consola creada exitosamente","info")
});