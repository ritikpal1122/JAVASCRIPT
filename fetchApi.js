const url = "https://catfact.ninja/fact";
const h1 =  document.querySelector("h1");
/* 
const fetchData = () =>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => (h1.innerText= data.fact))
    .catch((e) => console.log(e))
    .finally(() => console.log("All Done"));
    
};

fetchData();
*/
// Async Await 

/*
const fetchData = async () => {

   const response =   await fetch(url);
   const data = await  response.json();
   h1.innerText = data.fact;

};

fetchData();
*/

// console.log("a");

// setTimeout (() => {
//     console.log("Timeout");
// },0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("z") 




// Error handling 

const fetchData = async () => {
try {
    const response =   await fetch(url);
    const data = await  response.json();
    h1.innerText = data.fact;
 
} catch (error) {
    console.log(error.message);
}
finally {
    console.log("Done");
}
 };
 
 fetchData();