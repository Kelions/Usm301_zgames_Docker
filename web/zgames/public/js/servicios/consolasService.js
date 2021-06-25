//Este archivo tendra las operaciones tipicas para comunicarce con el controlador

//getConsolas
const getConsolas = async ()=>{
    let resp = await axios.get("api/consolas/get");
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