const zodiac = document.getElementById("zodiac");


const body  = document.body;
body.style.backgroundColor = "red";
const changeBackground =() => {
   switch (zodiac.value) {
    case "aries":
        body.style.backgroundColor = "red";
        break;
   
    case "tarus":
        body.style.backgroundColor = "";
        break;
   
    case "gemini":
        body.style.backgroundColor = "";
        break;
   
    case "cancer":
        body.style.backgroundColor = "";
        break;
   
    case "leo":
        body.style.backgroundColor = "";
        break;
   
    case "virgo":
        body.style.backgroundColor = "";
        break;
   
    case "libra":
        body.style.backgroundColor = "";
        break;
   
    case "scorpio":
        body.style.backgroundColor = "";
        break;
   
    case "sagittarius":
        body.style.backgroundColor = "";
        break;
   
    case "capricorn":
        body.style.backgroundColor = "";
        break;
   
    case "pisces":
        body.style.backgroundColor = "";
        break;
   
 
   
    default:
        break;
   }
};
