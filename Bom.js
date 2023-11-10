

navigator.geolocation.getCurrentPosition( (d) => {
     console.log(d);    
},
(e) => console.log(e)
);

console.log(history);
console.log(screen);
console.log(location.hostname);
console.log(location.port);

const func =() => location.reload();
