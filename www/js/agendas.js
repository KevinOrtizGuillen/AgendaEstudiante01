var AGENDA=(function(){
var my={};
    ////////////////////////////////7
    my.cargarLista=function(idOpciones){
        /////
             
        var param={};
        param.Servicio=idOpciones;
        
       $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/getServicios",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);
                  $("#idListaAgendas").empty();
                    for(var i=0;i<data.dato.length;i++){
                    
                        $("#idListaAgendas").append("<li ><a href='#idpageLLENAR'>"+data.dato[i].fecha+' hora: '+data.dato[i].hora+' '+data.dato[i].comentario+"</a></li>");
                        
                        
                        
                    }               
                              
            },
            error:function(data){
            
                console.log("ERROR:"+data);
            }
        });
    
        /////
    
    };
    //////////////////////////////////
return my;
}());