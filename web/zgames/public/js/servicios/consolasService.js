//Este archivo tendra las operaciones tipicas para comunicarce con el controlador

//getConsolas
const getConsolas = async (filtro = "todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/consolas/get");

    }else{
        resp = await axios.get(`api/consolas/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

//crearConsolas

const crearConsolas = async (consolas)=>{
    let resp = await axios.post("api/consolas/post",consolas,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};


const eliminarConsola = async(id)=>{
    try{

        let resp = await axios.post("api/consolas/delete",{id},{
            headers:{
                "content-type":"application/json"
            }
        });
        return resp.data =="ok";

    }catch(e){
        return false;
    }
   
}