const cargarMarcas = async()=>{
    //1 buscar las marcas a la api
    let marcas = await getMarcas();
    //2. cargar las marcas dentro del select

    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m => {
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);
        });

};
//para ejecutar un codigo asegurandoce que el total de la paagina, incluidos los recursoos esten cargaados antes de ejecutar 
document.addEventListener("DOMContentLoaded", ()=>{
    cargarMarcas();

});

document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let marca = document.querySelector("#marca-select").value.trim();
    let anio = document.querySelector("#anio-txt").value.trim();

    let errores = [];
    if(nombre ===""){
        errores.push("debe ingresar un nombre")
    }else{
        //vaalidaar si l consolaa existe
        let consolas = await getConsolas();
        let consolaEcontrada = consolas.find(c=>c.Nombre.toLowerCase()=== nombre.toLowerCase());

        if(consolaEcontrada != undefined){
            errores.push("la consola ya existe");
        }
    }
    if(isNaN(anio)){
        errores.push("el año debe ser numerico")
    }else if ( +anio < 1958){
        errores.push("el anio es incorrecto")
    }
    if( errores.pushlength == 0){

        let consolas = {};
        consolas.nombre = nombre;
        consolas.marca =marca;
        consolas.anio = anio;
        //Falta validar todo
        //1. va al controlador  y le pasa los datos
        //2. el controlador crea el modelo
        //3. el modelo ingresa a la base de datos
        let res = await crearConsolas(consolas);
        await Swal.fire("consola creada","consola creada exitosamente","info")
    
        //Aca se va a redirigir  a otra pagina
        window.location.href= "ver_consolas"
    }else{
        //mostrar errores
        Swal.fire({
            titlte: "errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        })
    }

    
});