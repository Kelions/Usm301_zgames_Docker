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
}