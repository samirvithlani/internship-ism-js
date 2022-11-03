// promise stages   0:pending 1:fulfilled 2:rejected
//pending --> resolved or rejected

function getData() {
  //promise
  let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("data");
      //reject("error in api call");
    }, 2000);
    });

  console.log("promise....",promise);

  promise.then((data) => {
    console.log("data....",promise);
    console.log(data);
  });

  promise.catch((err) => {
    console.log("data....",promise);
    console.log(err);
  });
  promise.finally(()=>{
    console.log("finally");
  })

}

getData();
