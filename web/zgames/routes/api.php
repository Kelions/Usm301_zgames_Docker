<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
quiero usar el controlador asi que lo importoo se importa con namespace\NombreClase
*/
use App\Http\Controllers\ConsolasController;
use App\http\Controllers\JuegosController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// la ruta puede ser post o get (post para enviar cosas a la bd)
Route::get("marcas/get", [ConsolasController::class,"getMarcas"]);

Route::get("consolas/get",[ConsolasController::class,"getConsolas"]);

Route::post("consolas/post",[ConsolasController::class,"crearConsolas"]);

Route::post("consolas/delete",[ConsolasController::class,"eliminarConsola"]);

Route::get("consolas/filtrar",[ConsolasController::class,"filtrarConsolas"]);


Route::get("juegos/get",[JuegosController::class,"getJuegos"]);
Route::get("juegos/getByConsola",[JuegosController::class,"getJuegosByConsola"]);
Route::get("juegos/post",[JuegosController::class,"save"]);
Route::get("juegos/delete",[JuegosController::class,"remove"]);



