<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaJuegos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('juegos', function (Blueprint $table) {
            $table->id();
            //1 definir los campos de la tabla juegos
            $table->String("nombre",100);
            $table->String("descripcion",200);
            $table->tinyInteger("apto_ninios")->default(0);
            $table->integer("precio")->unsigned();
            $table->date("fecha_lanzamiento");
            //2 agregar la columna de la foranea
            //las claves primarias de laravar (id) por defecto son bigInteger() y unsigned()
            $table->bigInteger("consola_id")->unsigned();
            //3. Agregar la relacion
            //alter Table add constraing forgein key...
            $table->foreign("consola_id")->references("id")->on("consolas")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('juegos');
    }
}
