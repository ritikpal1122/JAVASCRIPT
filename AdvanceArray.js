// Arrow Function 

const myFunc = (a,b) => {
    console.log(a+b);

};
myFunc(1,5);

const arr= [2,4,6,8,10];
// Array Methods 

// ******     1 - find   ******* return one element at a time 

// const result = arr.find((value,index) => {
//     // if (value>4)
//     //   return value;
//     console.log(index);
// });
// console.log(result);


//  *****  2 filter ***** return Whole Array 
// const result = arr.filter((value,index) => {
//     if (value<6)
//     return value ; 
// });
// console.log(result);


// ******   3 every ******** return boolean for every value

// const result = arr.every((value,index) =>{
//     return value>2 ;
// });
// console.log(result);

// ******   4 some  ******** return boolean for any value  
// const result = arr.some((value,index) =>{
//     return value>2 ;
// });
// console.log(result);

// ******  for of loop ****** 
// for (const value of arr){
//     console.log(value);
// }

// ******  for each loop ****** 
let totalsum = 0 ;
arr.forEach((value,index) => {
   // console.log (value);
    totalsum += value;

    
});
console.log(totalsum); 