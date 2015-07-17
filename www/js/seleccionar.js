var SELECCIONAR = (function () {
    var my = {};
    ////////////
    
    my.crearEnlaces=function(){
        //Enlaces Page Alumno
     //$("body").append('<a id="idGoAlumno" href="#idPageAlumno"  class="style-31"></a>');
        $("body").append('<a  id="irpageSELEC" href="#idpageSELEC"></a>');
     
         /* listitem  #listaPrueba */
     $(document).on("click", "#listaEventos", function(evt)
        {
            /* your code goes here */ 
            //$.ui.popup('Hi there');
            //$(evt.target).attr('id');
            //console.log(evt);
            DEPU=evt;
            var idOpciones=$(evt.target).attr('idLista');         
            //CURSO.cargarCursos(idOpciones);
         AGENDA.cargarLista(idOpciones);
         
        });      
    };//////////////////////////////////////////////////////////////////////////////////
    my.cargarEVENTOS=function(){
             
        var param={};
        param.ciclo='I';
        
       $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/getAgenda",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);
                console.log(data.status);
                
                if(data.status===1){
                
                    $("#listaEventos").empty();
                    for(var i=0;i<data.data.length;i++){
                    
                        $("#listaEventos").append("<li ><a href='#idpageLLENAR' idalumno= "+data.data[i].id+">"+data.data[i].usuario+"</a></li>");
                        
                        
                        
                    }
                }
                if(data.status===0){
                    
                     navigator.notification.alert(
                        'ERROR AL CAPTURAR LISTA',  // message
                        function(){},         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }
              
            },
            error:function(data){
            
                console.log("ERROR:"+data);
            }
        });
    
    };//////////////////////////////////////////////////////////////////////////////////
    
//////////
    return my;
}());