@extends('layouts.master')
@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto"> 
    
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Agregar Consola</span>
            </div>
            <div class="card-body bg-warning">
                <div class="mb-3">
                    <label for="nombre-txt" class="from-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="from-control">
                </div>
                <div class="mb-3">
                    <label for="marca-select" class="from-label"></label>
                    <select name="form-select" id="marca-select">
                        <option value="microsoft">Microsoft</option>
                        <option value="sony">Sony</option>
                        <option value="nintendo">Nintendo</option>
                        <option value="sega">Sega</option>
    
                    </select>
                </div>
                <div class="mb-3">
                    <label for="anio-txt" class="from-label">Año de lanzamiento</label>
                    <input type="number" class="from-control" id="anio-txt">
                </div>
            </div>
            <div class="card-footer d-grid gap-1 bg-warning">
    
                <button class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>    

    
@endsection