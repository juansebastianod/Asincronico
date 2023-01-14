import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function deleteData(urlAPI){

    const reponse=fetch(urlAPI,{
        method:'delete',
        mode:'cors',
        credentials:'same-origin',
        headers:{'Content-Type':'application/json'},
       


    })
    return reponse;
}

const id=204
deleteData(`${API}/products/${id}`)

