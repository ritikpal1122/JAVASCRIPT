// // example one 

// // synchronous 
// function example1(name="Ritik"){
//     return `wassup , i am ${name}`;
// }

// const  result = example1();
// console.log(result);



// // Example 2 

// function example2(name="Ritik")
// {
//     // console.log(`${name} : ${Math.random()}`)

//     for (let i = 0 ; i<=100;i++)
//     {
//         console.log(`${name} : ${i}`)  
//     }
// }

// example2();
// alert("Last line");
// console.log("Last Line");



// 18  **** Callback ***** 


// function sum(a,b,c)
// {
//     const result  = a+b;
//    c(result)
// }

// function displaySum(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText = result;
// }

// sum (20,30,displaySum);
// sum(20,130,alert);


// **** Another Example of Call back \

const arr = [1,2,3,4,5];
 
// function Multiply (arr = []){
//     const ans =[] ;
//     for (let i=0;i<arr.length;i++)
//     {
//         ans.push(arr[i]*10);

//     }
//     console.log (ans);
// }

// function devide (arr=[])
// {
//     const ans =[] ;
//     for (let i=0;i<arr.length;i++)
//     {
//         ans.push(arr[i]/10);

//     }
//     console.log (ans);
// }

// multuply(arr);
// devide(arr);

// **** Instead Of Declaring function Again And Again We go for call back 

function calculate(arr=[] , Callback){
    const ans =[] ;
    for (let i=0;i<arr.length;i++)
        {
           const element = Callback(arr[i]);
           ans.push(element);
        }
        console.log(ans);
}

calculate(arr , (a) => a*10);
calculate(arr , (a) => a/10);

