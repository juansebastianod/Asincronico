const vacas = 12;

const countCows = new Promise((resolve, reject) => {
  if (vacas > 10) {
    resolve(`we have ${vacas} cows on the farm `);
  } else {
    reject("llorinder");
  }
});

countCows
  .then((result) => {
  console.log(result)
  }).then(()=>{
    console.log("hola")
  })
  


//   return new Promise((resolve, reject) =>{
//     window.setTimeout(() =>{
//      resolve (message);
//     }, time);
    
//  });

