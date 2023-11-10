const a = new Promise((resolve,reject) => {
 let success = true;
  if (success)resolve("Promise Fulfilled");
 else  reject("Some Technical Error");
});

a.then((parameter) => {
    console.log(parameter);
}).catch((error) => {
    console.log(error);
});


const arr = [] ;

const fetchData = (arr = [] ) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
        arr.push({name: "abhi"});
        if (arr.length > 0 ) resolve("Data Fetched ");
        else reject ("Some Technical Error");
        },2000);
    });
};

fetchData(arr)
.then((message) => console.log (message))
.catch((message) => console.log(message))
.finally(()=> console.log("Will Work Either Way "));