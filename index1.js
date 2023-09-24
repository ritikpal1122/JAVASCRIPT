// Type Conversion 

let a = "545";
console.log (a);
console.log (typeof Number (a));

// Number to string 
 
let b = 45;
console.log (typeof b.toString()); 

// String methods  // indexing Start From 0
let s = "My Name Is Ritik";
console.log(s[3]); 

// Index of 
console.log(s.indexOf("N")); 
console.log(s.lastIndexOf("i"));

// Char pos 
console.log(s.charAt(11));

// From which string ends 
console.log(s.endsWith("is"));

// String present or not
console.log(s.includes("  Is"));

// Print Substring
console.log(s.substring(0,4));

// Split String
console.log(s.split("y"));

// Replace 
console.log(s.replace("Is" , "Hai"));

// string length

console.log(s.length);



// Dom Manupulation 

let heading = document.getElementById("myHeading");
heading.innerText  = s;

// We can Aslo Aplly Css in it 
heading.style.backgroundColor= "blue";
heading.style.color = " white";

