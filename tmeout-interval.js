const btn = document.querySelector("button");
const printName  = (name,income,male)=>{
    let gender  = male ;
    if (gender)
    {
        gender = "male";
    }
    else{
        gender = female ;
    }

console.log(`Welcome , ${name}.Your income is ${income}.Gender is ${gender} `);
};

const customTimeout  = setTimeout(printName,5000,"Ritik",2000,true);

btn.addEventListener("click" ,()=>{
    clearTimeout(customTimeout);
});