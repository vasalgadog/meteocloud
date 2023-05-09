function cargarDatosTablaEstaciones(){
    $.ajax({
        data:'action=getEstacionesData',
        type:'POST',
        url:'../Core/controllers/Estaciones/controllerCatastroEst.php',
        dataType: 'JSON' ,
        success:function (resp){
            var rows = new Array()
            if(resp.datosEstaciones != null){
                for(var cont = 0; cont < resp.datosEstaciones.length ; cont++) {
                    if(resp.datosEstaciones[cont].datos != null){
                        for(var dCont = 0 ; dCont < resp.datosEstaciones[cont].datos.length; dCont++){
                            let row = {
                                codigoNacional : resp.datosEstaciones[cont].estacion.codigoNacional,
                                nombreEstacion : resp.datosEstaciones[cont].estacion.nombreEstacion,
                                ...resp.datosEstaciones[cont].datos[dCont]
                            }
                            rows.push(row)
                        }
                    }
                    
                    
                }
            }
            
            if(resp.datosEstaciones.length>0){
                $('#TablaDatosEst').DataTable({
                    data: rows,
                    columns : [
                        {data: 'codigoNacional'},
                        {data: 'nombreEstacion'},
                        {data: 'aguaCaida6Horas'},
                        {data: 'aguaCaida24Horas'},
                        {data: 'aguaCaidaDelMinuto'},
                        {data: 'direccionDelViento'},
                        {data: 'direccionDelViento02MinutosMax'},
                        {data: 'direccionDelViento10MinutosMax'},
                        {data: 'direccionDelVientoPromedio2Minutos'},
                        {data: 'direccionDelVientoPromedio10Minutos'},
                        {data: 'fuerzaDelViento'},
                        {data: 'fuerzaDelViento02MinutosMax'},
                        {data: 'fuerzaDelViento10MinutosMax'},
                        {data: 'fuerzaDelVientoPromedio2Minutos'},
                        {data: 'fuerzaDelVientoPromedio10Minutos'},
                        {data: 'humedadRelativa'},
                        {data: 'momento'},
                        {data: 'presionEstacion'},
                        {data: 'presionNivelDelMar'},
                        {data: 'presionNivelEstandar'},
                        {data: 'puntoDeRocio'},
                        {data: 'radiacionGlobalInst'},
                        {data: 'temperatura'},
                        {data: 'temperatura02Mts'},
                        {data: 'temperatura10Mts'},
                        {data: 'temperatura30Mts'},
                        {data: 'temperaturaMaxima12Horas'},
                        {data: 'temperaturaMinima12Horas'}
                    ],
                    responsive : true,
                    columnsDefs:[
                        { responsivePriority: 1, targets: 0 },
                    ],function(){console.log('im here')}
                })

            }else{
                $('.cargarDatosTablaEst').html(
                    "<tr>" +
                    "<td class='text-center'>(No existen registros)</td>" +
                    "</tr>"
                );
                
            }
        },
    });
}

cargarDatosTablaEstaciones()