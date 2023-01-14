import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function putData(urlAPI,data){

    const reponse=fetch(urlAPI,{
        method:'PUT',
        mode:'cors',
        credentials:'same-origin',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)


    })
    return reponse;
}

const data={"title":"Juan Sebastian","price":1234}
putData(`${API}/products/205`,data)
.then(response=>response.json())
.then(data=>console.log(data));