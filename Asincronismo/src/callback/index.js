function sum(num1,num2){

    return num1+num2;
}

function calc(num1,num2,callbanck){

    return callbanck(num1,num2);
}

console.log(calc(2,5,sum));



setTimeout(() => {

    console.log("hola JavaScrip");
    
}, 2000);

function gettin(name){

    console.log(`hola ${name}`)

    
}


setTimeout(gettin, 5000,"juan");

// const button=document.getElementById("cambiar");


// const titulo=document.getElementById("mundo");


// button.addEventListener('click',()=>{



//     titulo.innerHTML="hola por 1234567 vez"
// })