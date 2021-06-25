<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaConsolas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   
        //modelo orientraddo aobjeto
        //base de datos relacional + programacion orientada a objetos
        //mySQL + Eloquent (ORM del modelo de laravel) object relational mapping
        //Crear claes para que se cree sola la tabla
        Schema::create('consolas', function (Blueprint $table) {
            $table->id();
            $table->string("Nombre",150);
            $table->string("marca",50);
            $table->integer("anio");
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
        Schema::dropIfExists('consolas');
    }
}
