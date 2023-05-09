function cargarDatosTablaCatastro(){
    $.ajax({
        data:'action=getApiData',
        type:'POST',
        url:'../Core/controllers/Estaciones/controllerCatastroEst.php',
        dataType: 'JSON' ,
        success:function (resp){
            if(resp.datosEstacion.length>0){
                $('#TablaDatos').DataTable({
                    data : resp.datosEstacion,

                    columns : [
                        {data: 'codigoNacional'},
                        {data: 'nombreEstacion'},
                        {data: 'NombreRegion'},
                        {data: 'zonaGeografica'},
                        {data: 'codigoOMM'},
                        {data: 'codigoOACI'},
                        {data: 'latitud'},
                        {data: 'longitud'},
                        {data: 'altura'},
                        {defaultContent: "<button id='view' class='btn btn-primary' type='button' data='codigoNacional' onClick='openNewWindows("+resp.datosEstacion.codigoNacional+")'>Ver detalles</button>"}
                    ],
                    responsive : true,
                    columnsDefs:[
                        { responsivePriority: 1, targets: 0 },
                        { responsivePriority: 1, targets: 1 },
                        { responsivePriority: 2, targets: 2 },
                        { responsivePriority: -1, targets: 3 },
                        { responsivePriority: -1, targets: 4 },
                        { responsivePriority: -1, targets: 5 },
                        { responsivePriority: -1, targets: 6 },
                        { responsivePriority: -1, targets: 7 },
                        { responsivePriority: -1, targets: 8 },
                        { responsivePriority: -1, targets: 9 }
                    ]
                })

            }else{
                retorno="<tr>" +
                    "<td class='text-center'>(No existen registros)</td>" +
                    "</tr>";
                $('.cargarDatosTablaCatastro').html(retorno);
                
            }
        },
    });
}
cargarDatosTablaCatastro()