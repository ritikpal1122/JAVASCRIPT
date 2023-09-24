// Array 
// In JS We can initialise array with index 0

// let arr= [10,20,30,40];

// let arr1= ["Ritik " , "Pal"];
// let arr2= [10,"MaiHoon",30,40];
// console.log(arr[4]);
// console.log(arr);
// console.log(arr1[0]);


// let arr = [] ;

// arr[1] = 10;
// arr[3] = 10;
// arr[4] = 10;
// arr[5] = 10;
// console.log(arr);

// let arr= new Array (4);
// arr[2] =12;
// console.log(arr);

// Push Method 
// If we push any element in the array then it will push in the last index of the array 
/*
   let arr= [1,2,3];
   arr.push(7); // insert at end 
   arr.pop(); // remove last index 
   arr.shift(); // remove fisrt index 
   arr.unshift(5); // Insert at start 

   arr.push(7);
   arr.push(8);
   arr.push(4);
   arr.push(9);
  
   arr.splice(3,4); // kaha se kaha tak delete karna hai 
   console.log(arr.length); // for length 
arr.reverse();  // reverse the array 

arr.unshift(10);


      console.log(arr);
      */
// LOOps with array 

let arr = [] ;

for (let i = 0; i<10; i++)
{
  // arr[i]=  "abhi"
  arr.push ("abhi");
}
console.log(arr);

const arr1= [] ;

arr1.push(10);
arr1[1] = 123;
console.log(arr1);