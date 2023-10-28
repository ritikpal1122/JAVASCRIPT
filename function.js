// functions

function printthevalue(a=0,b=0,c=0){  // abc is  parameters
    let result = (a*10 + b*10 + c*10 )/10;

    
    console.log(result);


}
// Function Calling 

printthevalue(23,23,23); // Value that i've been passed is arguments

// void Function 
function intro (name,linkedin){
    console.log(
    `My name is ${name} . Please follow me On Linkedin ASAP ,
     What are you waiting for? My linkedIN name is ${linkedin}`);

     // Calling Function Inside Function 
     console.log(`my Income is ${printthevalue(10,20,12)}`);
}

intro("Ritik", "ritikpal1122");





// Calling Array In 
function totalofArray(arr=[]){
    let total= 0 ;
    for (let i = 0 ;i<arr.length;++i){
        total = total+arr[i];
    }
    return total;
}
// const arr = [1,2,3,4,5];
// console.log (totalofArray(arr));

// Routing 

let a =20 ;
{
    let b=30 ;
    console.log(a);

}
console.log(b);


