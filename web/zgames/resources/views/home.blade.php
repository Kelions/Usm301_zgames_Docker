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
                    <div>
                        <input type="text" id="nombre-txt" class="from-control">

                    </div>
                </div>
                <div class="mb-3">
                    <label for="marca-select" class="from-label"></label>
                    <select name="form-select" id="marca-select">
                    </select>
                </div>
                <div class="mb-3">
                    <label for="anio-txt" class="from-label">Año de lanzamiento</label>
                    <div>
                        <input type="number" class="from-control" id="anio-txt">
                    </div>
                
                </div>
            </div>
            <div class="card-footer d-grid gap-1 bg-warning">
    
                <button id="registrar-btn" class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>    

<!-- esto define el contenido de la seccion js del master -->    
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/consolasService.js')}}"></script>
    <script src="{{asset('js/home.js')}}"></script>

@endsection