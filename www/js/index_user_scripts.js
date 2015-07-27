(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
   // $("body").append('<a  id="irpageSELEC" href="#idpageSELEC"></a>');
      
   
     SELECCIONAR.crearEnlaces();
     $("#idfecha").val("2015-06-26");
     $("#idhora").val("20:00");
     $("#idcomentario").val("reuniom de del salom");
    
     /* button  #idir */
    $(document).on("click", "#idir", function(evt)
    {
        /* your code goes here */
        var user=$("#iduser").val();
        var pass=$("#idpass").val();
         
        var param={};
        param.usuario=user;
        param.contrasenia=pass;
        
        
        $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/getLogin",
            data:"data="+JSON.stringify(param),
            dataType:"text",
            //////////////////////////
            
            success:function(data){
            var dato=JSON.parse(data);
                /////////////////////////
                if(dato.status===1){
                   //navigator.notification.confirm('MENSAJE',function(){},'Ingresaste','Aceptar');
                $("#irpageSELEC").click();
                //     SELECCIONAR.cargarEVENTOS();
                        
                }
                 
            
            },
            error:function(data){
            console.log("ERROR"+data);
            }
        
        });
        
    });
    
     
    
        /* button  #idguardar */
    $(document).on("click", "#idguardar", function(evt)
    {
        /* your code goes here */ 
         var fecha=$("#idfecha").val();
        var hora=$("#idhora").val();
        var comentario=$("#idcomentario").val();
        
         
         
    });
    
        /* button  #idmapaE */
    $(document).on("click", "#idmapaE", function(evt)
    {
        /* your code goes here */ 
        // activate_page("#idPageVerEstudiantes1"); 
        $("#idPageVerEstudiantes1").onclick
    });
    
        /* button  #idMenviar */
    $(document).on("click", "#idMenviar", function(evt)
    {
        /* your code goes here */ 
        enviarPosicion();
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
