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

}
cargarMarcas();