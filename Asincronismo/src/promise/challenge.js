import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

 function fetchData(urlAPI){

     return fetch(urlAPI);
};

// fetchData(`${API}/products/4`).then(response=> response.json())
// .then(products=>{

//     console.log(products);
// })
// .catch(error=>{

//     console.error(error);
// });


fetchData(`${API}/products`)
.then(response=>response.json())
.then(products=>{

    
return fetchData(`${API}/products/${products[0].id}`)


})
.then(response=> response.json())
.then(prooduct=>{
    console.log(prooduct)
    console.log(prooduct.title);

    return fetchData(`${API}/categories/${prooduct.category.id}`);
}).then(reponse=> reponse.json())//json solo tranforma el dato
.then(category=>{
    console.log(category.name);
})
.catch(error=>{

    console.error(error);
})