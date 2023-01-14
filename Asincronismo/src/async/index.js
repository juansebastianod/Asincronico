const fnAsync=()=>{

    return new Promise((resolve,reject)=>{


        (true)?setTimeout(()=>resolve('Async!!',5000)):reject(new Error('ERROR'));
})
}

const another=async()=>{

    const something=await fnAsync();
    console.log(something);
    console.log("hello")
}

console.log("before")
another();

console.log("after")