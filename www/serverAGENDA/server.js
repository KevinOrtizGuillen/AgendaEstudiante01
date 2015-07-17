var IPADDRESS="192.168.56.1";
var PORT=9095
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
   
    next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

var server = app.listen(PORT,IPADDRESS);
console.log('Escuchando en '+IPADDRESS+':'+PORT);

app.post('/getLogin', function(req, res){	
	
    var data=req.param('data');
    data=JSON.parse(data);
    //console.log(data);
	
    if(data.usuario!=="milton" || data.contrasenia!=="miqueas"){


	var msn={};
	msn.data=null;	
	msn.status=0;
	msn.message="NO AUTENTICADO";


    }
    else{

	var user={}
    	user.id=1;
    	user.usuario='milton';


	var msn={};
	msn.data=user;	
	msn.status=1;
	msn.message=null;
	
   }				
	    
    
	
	res.json(msn);
	
});
app.post('/getAgenda', function(req, res){	

    	var data=req.param('data');
	data=JSON.parse(data);    	

	//console.log(data);

	var ciclo=null;	
	
	//if(data.ciclo=="I"){
	  //ciclo="I";
	//}
	//else if(data.ciclo=="II"){
	 // ciclo="II";
	//}	
	
    	var user={}
    	user.id=1;
    	user.usuario='EXAMEN';
	user.ciclo=ciclo;
    
	var user1={}
    	user1.id=2;
    	user1.usuario='TRABAJOS';
	user1.ciclo=ciclo;
    	
	var user2={}
    	user2.id=3;
    	user2.usuario='OTROS';
	user2.ciclo=ciclo;
    
	var users=[];
	users[0]=user;
	users[1]=user1;
	users[2]=user2;
	
	var msn={};
	msn.data=users;	
	msn.status=1;
	msn.message=null;
	
	res.json(msn);
	
});

app.post('/getServicios', function(req, res){
	var dato=req.param('data');
	dato=JSON.parse(dato);
	if(dato.Servicio==='Examen'){
		var msn={};
		var agenda={};
		var lista=[];
        //damos valres a la agenda
        agenda.fecha='2999-22-22';
        agenda.hora='24:00';
        agenda.comentario='ser puntual al examen';
        //las agendas ñllenadas lo paso a la lista
		lista[0]=agenda;
		///asigno la lista a la msn para envirlo al servidor
		msn.dato=lista;

	}else if(dato.Servicio==='Trabajos'){
		var msn={};
		var agenda={};
		var lista=[];
		var fech=new Date();

        //damos valres a la agenda
        agenda.fecha=fech.getDate()+"/"+fech.getMonth()+"/"+fech.getYear();
        agenda.hora=fech.getHours();
        agenda.comentario='ser puntuañ al trabajo';
        //las agendas ñllenadas lo paso a la lista
		lista[0]=agenda;
		///asigno la lista a la msn para envirlo al servidor
		msn.dato=lista;

	}else if(dato.Servicio==='Otros'){
		var msn={};
		var agenda={};
		var lista=[];
        //damos valres a la agenda
        agenda.fecha='2999-22-22';
        agenda.hora='24:00';
        agenda.comentario='ser puntuañ al otros reuniones';
        //las agendas ñllenadas lo paso a la lista
		lista[0]=agenda;
		lista[1]=agenda;
		lista[2]=agenda;
		///asigno la lista a la msn para envirlo al servidor
		msn.dato=lista;
	}
	res.json(msn);

});
