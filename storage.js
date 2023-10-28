const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");

const btnClick = () => {
  sessionStorage.setItem("key1" , input.value);
};

btn.addEventListener("click",btnClick);

// Access Sessin Storage 
alert(sessionStorage.getItem("key1"));
