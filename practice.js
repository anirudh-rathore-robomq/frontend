// const object1 = {
//     name : "Anirudh",
//     lastname: "Rathore",
//     fullname: function(){
//         return "" +this.name + this.lastname;
//     }
// }
// console.log(object1.fullname());

// for(let i = 0 ; i < 10 ; i++){
//     console.log(i);
// }

// for(let i in object1){
//     console.log(object1[i]);
// }
// const name = "Ramesh";
// for(let i of name){
//     console.log(i);
// }
// var i = 10;
// while( i > 0){
//     i--;
//     console.log(i);
// }

// do{
//     console.log(i);
//     i--;

// }while(i > 0);

// function newFunction(){
//     console.log("Function invoked");
// }
// newFunction();

// //arrow function example

// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     printNameArrow() {
//         setTimeout(() => {
//             console.log('Arrow: '+this.name);
//         },100)
//     }

//     printNameFunction(){
//         setTimeout(function(){console.log('Function: '+this.name)},100)
//     }

// }
// let person = new Person('Bob');
// person.printNameArrow();
// person.printNameFunction();
// console.log(this.name);

var functioneg = () => "hello";
console.log(functioneg());
var x = 0;
function func(){
    console.log("hello");
    x = x + 7;

}
console.log(func());
console.log(functioneg);
console.log(func.toString());                