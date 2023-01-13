const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";


function fetcDate(urlAPI,callbanck){
let xhttp=new XMLHttpRequest();//esto es el de arriba

xhttp.open('GET',urlAPI,true);//ABRE UNA CONEXION 

xhttp.onreadystatechange=function(event){//escuchar estados delasolicitud

    if(xhttp.readyState===4){

        //0 no inicializado
        //1 todavia no se ha llamado el valor de 0 o loading 
        //2 cuando se ejecuta el valor de 0 
        //3 interatua con la solicitud
        //4 cuando se completo la llamda

        if(xhttp.status===200){//https://developer.mozilla.org/es/docs/Web/HTTP/Status

            callbanck(null,JSON.parse(xhttp.responseText));//presposeText e para saber si la consulta tuvo exito
        }else{

            const error=new Error('error'+urlAPI);
            return callbanck(error,null);
        }
    }

        
   

  


}

xhttp.send();

}

fetcDate(`${API}/products`,function(error1,data1){

    if(error1) return console.error(error1);

    fetcDate(`${API}/products/${data1[0].id}`,function(error2,data2){
        if(error2) return console.error(error2);

        fetcDate(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3) return console.error(error3);

            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);


        });


    });

});