const vacas = 5;

countCows = new Promise((resolve, reject) => {
  if (vacas > 10) {
    resolve(`we have ${vacas} cows on the farm `);
  } else {
    reject("llorinder");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });


//   return new Promise((resolve, reject) =>{
//     window.setTimeout(() =>{
//      resolve (message);
//     }, time);
    
//  });