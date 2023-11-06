// // creating class 
// class Myclass{
//     // creating constructor 
//    #a = 30 ; // we cant access a brecause its a private variable 
//     constructor(value1,value2)
//     {
//         this.a = value1;
//         this.b = value2;
//         this.c ="default";

//     }
//     // a = 20;
//     // b=30;
//     // print(){
//     //     console.log("I am Printing ");
//     // }

// // for accessing private data we use get function 

//     get getData(){
//      return this.#a;
//     }
//     set setA (a){
//       this.#a = a;

//     }
// } 

// // function
// // function Myclass(value1,value2 )
// // {
// //     this.a =value1;
// //     this.b = value2;
// // }
// // creatiing object using class 
// const obj1 = new Myclass(30,23);
// // obj1.print(); 
// console.log(obj1);

// obj1.setA=22;
// console.log(obj1.getData);



//*****Inheritance  */

class Electronics {
    #input;
    #output;
    #name;
    constructor(input,output,name)
    {
        this.#input= input;
        this.#output = output;
        this.#name = name ;

         
    }
    print(){
        console.log(this.#name);
    }
}
// now inherit 
class Charger extends Electronics 
{
    #plugtype;
    constructor(input,output,name,plugtype){
        super(input,output,name) ;// here super is parent class constructor 
        this.#plugtype = plugtype;

    }
}

const hpcharger = new Charger(18,200,"charger","European");
const asuscharger = new Charger(18,200,"asus","China");
const Dellcharger = new Charger(18,200,"Dell","Xyd");
const Maccharger = new Charger(18,200,"Mac","efbhe");

hpcharger.print();
asusccharger.print();
Dellcharger.print();
Maccharger.print();

