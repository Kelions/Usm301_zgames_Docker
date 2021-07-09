<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Consola;

//Aqui va toda la logica de consolas
class ConsolasController extends Controller
{
        public function getMarcas(){
            
            $marcas = array();
            $marcas[] = "Sony";
            $marcas[] = "Microsoft";
            $marcas[] = "Nintendo";
            $marcas[] = "Sega";
            return $marcas;
        }

    ## Esta funcion irea  abuscar todas las consolas de la BD y las va a retornar
    public function getConsolas(){
        //equivalente a un select * from consolas
        $consolas = Consola ::all();
        return $consolas;

    }

    public function filtrarConsolas(Request $request){
        $input = $request->all();
        $filtro = $input ["filtro"];
        $consolas = Consola::where("marca","=",$filtro)->get();
        return $consolas;
    }

    ## Esta funcion registrara una consola de ejhemplo en la bd
    public function crearConsolas(Request $request){
        // equivalente al insert into...
        $input = $request ->all(); //devuellve un arreglo con todo lo que mandaron
        //Equivalente a un insert
        $consola = new Consola();
        $consola->nombre = $input["nombre"];
        $consola->marca = $input["marca"];
        $consola->anio = $input["anio"];

        $consola->save();
        return $consola;
    }

    public function eliminarConsola(Request $request){

        $input = $request->all();
        $id = $input["id"];
        //eloquest el admministradoor de BD de laravel se llaa eloquent
        //1  Ir  buscar el registro da la bd
        $consola = consola::findOrFail($id);
        //Para eliminar se llama al mmetodo Delete
        $consola->delete();// Delete from consolas Where id = consola.id 
        return "ok";
    }
}