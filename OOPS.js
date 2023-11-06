// // Object 

// // let a = 21;

// // let b = a;

// // console.log(a);
// // console.log(b);

// // a= 20;
// // console.log(a);
// // console.log(b);


// // const b = {
// //     name:"ritik ",
// //     printSurname: () => {
// //         console.log("Pal");
// //     },
// // };
// // console.log(b);

// const a = {
//     name: "Ritik"
// }


// // Defining Object 

// let person = {
//     first_name : 'Ritik',
//     last_name : 'pal',

//     getfunction:function(){
//         return(`The Name of the Person is ${person.first_name} ${person.last_name}` )
//     },

//     // Object with in object 
//     phone_number:{
//         mobile:'12345',
//         landline:'5678'
//     }
// }
// console.log(person.getfunction());
// console.log(person.phone_number.landline);




// // constructor function 

// function star(weight,height) {
//     this.weight = weight;
//     this.height = height;
// }

// const RomanReigns = new star(256,185);
// console.log(RomanReigns); // Also check what  we use with .constructor

// **Define Obj in new Way *** 

const a =  new Object ({a:23,b:23,c:454});
console.log(a);

// Array is a object
const arr = new Array(23,233);
console.log(arr.constructor);

// fuction as a object 

const aa = function (){
    console.log("snssns");
};

console.log(aa);


//Enemy Game 
function Enemy (size,speed)
{
    this.size = size;
    this.speed= speed;
}

const Enemy2 =  new Enemy (256,185);

const enemies =[];
for (let i = 0;i<100;i++)
{
    enemies.push(new Enemy(Math.random()*100,21));
}
console.log(enemies);