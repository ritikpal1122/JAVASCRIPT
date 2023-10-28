// how to get data 
const arr= document.body.children;
// Conver this in array 
const newArr  =Array.from(arr);
console.log(arr);
console.log(newArr);

// itereate with loop

for(let i = 0 ;i<newArr.length;i++)
{
    console.log(newArr[i]); 
}


console.log(document.body); // body Data
console.log(document.body.firstChild); // body first child
console.log(document.head);  // Head Data 
console.log(document.documentElement); // Complete HTML Tag

// Access element by Id 
console.log(document.getElementById("thisone"));

// getlement by name 
const thisonee = document.getElementsByName("email");
console.log(thisonee);

// get element by tag name 
const gettthis = document.getElementsByTagName("span");
// we can modify text here 
gettthis[0].textContent = "NewRitik";
//gettthis[0].innerText = "NewRitika";
gettthis[0].innerHTML = `<span class = "myclass" >Nice</span>`;


// background Color 
gettthis[0].style.backgroundColor = "red";
// color 
gettthis[0].style.color = "green";


console.log(gettthis[0]); 


// style for new Button 

const myBtn = document.getElementById("myBtn");
 myBtn.style.backgroundColor = ("yellow");
 myBtn.style.color = "black";
 myBtn.style.borderColor = "black 2px";
 myBtn.style.padding= "2vmax 4vmax";
 myBtn.style.cursor = " pointer";


 // Querry Selector 
const btn = document.querySelector(".okay");
btn.innerText ="none";

// Attributes 
console.log(myBtn.getAttribute("id"));

// set attribute 
console.log(myBtn.setAttribute("class","thisisbtn"));

// Adding Element 

function bringMeheading(){  // isse javb ham click ya call krenge to run hoga
const h2 = document.createElement("h2"); //Declare element 
h2.innerText = "Hi";  // Print text 
document.body.prepend(h2);  //Show on Screan 
}

// Calling In JS 
myBtn.onclick = bringMeheading ; 