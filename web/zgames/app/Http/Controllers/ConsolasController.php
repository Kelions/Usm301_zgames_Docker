<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Consola;


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
public function crearConsolas(){

    //Equivalente a un insert
    $consola = new Consola();
    $consola->nombre = "nintendo Switch";
    $consola->marca = "nintendo";
    $consola->anio = 2015;

    $consola->save();
}
}