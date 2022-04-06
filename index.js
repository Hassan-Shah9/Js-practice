// let number = 3 ;

// for(let i=1 ; i <= 10 ; i++){
//     let result =i * number ;
//     console.log(`${number} * ${i} = ${result}`);
// }
// 'use strict';
// let haroonGad = false;
// const haroonBo = true;

// if (haroonBo)
//     haroonGad= true;

// if (haroonGad)
//     console.log("h a r o o n i s G a n d o")

// const private = 534;

//function

// function Name(){
//     console.log("Hola Every One ")
// }
// Name();
// function furitProcessor(apples , kelas ){

//     console.log(apples , kelas)
//     const juice = `juice with ${apples} apples ${kelas} kelas.`;
// return juice;
// }
// const milkShake=furitProcessor(5,10)
// console.log(milkShake)
// console.log(furitProcessor(5,6))

{/* <button>Google</button> */}

// function calAge1(birthday){

//     return 2022-birthday;
// }

//  const age =calAge1(1996)

//  const calAge2 = function(birthday){
//     return 2045-birthday
//  }
// const age2=calAge2(1996)
// console.log(age,age2)

// const calAge3 = birthday => 2050-birthday ;
// const age3 = calAge3(1996)
// console.log(age3)

// const retiermentAge = (birthday,firstName) => {
//     const age = 2022- birthday
//     const retierment = 65 - age
//     return `${firstName} is retier in ${retierment}`;
    
// }
// console.log(retiermentAge(  1996 ,'ali' ))

// const calAvrage = (a,b,c)=>(a+b+c)/3;
// console.log(calAvrage(1,2,3))


// const scoreKola = calAvrage(65,54,49);
// const scoreDola = calAvrage(44,23,71);
// console.log( scoreKola , scoreDola);


// const 

// function inner(){

// }
// function outter(fn)
// {
//     fn()
//   return "hello"
// }

// const x = outter(inner)

// console.log(x)


// function sum(a , b){
//     return a+b
// }
// function sub(fn){
//     fn()
    
// }
// // const a = sum(5,6)
// const b= sub(sum)
// console.log(b)


// let  name = "haroon";
// name  = "hassan" ;

// console.log(name )


// if (false){
//     console.log("bruce")
// }else  if(false){
//     console.log("hassan")
// }
// else{
//     console.log("ggggg")
// }

// //  marks < 60===>Fail 
// let marks = 40;

// if (marks < 60 ){
//     console.log("fail")
// }else if (marks >= 60 ){
//     console.log("pass")
// }else{
//     console.log("i m pass")
// }
// let age = 60; 
// let avAge = (age <= 40) ? true : false; console.log(avAge)

//if marks 50 ===> f if marks 60 ===> D if marks 70 ===> C 80 ===>B to 90 ===>A  


// let marks = 49;

// if (marks >=50 && marks<=60){
//     console.log("D")
// }else if (marks > 60 && marks <=70){
//     console.log("C")
// }else if(marks > 70 && marks <=80){
//     console.log("B")
// }else if(marks > 80 && marks <= 90){
//     console.log("A")
// }else{
// console.log("Fail")
// }


//function
// function outter() {
//     console.log("hello")
// }
// outter()


// function inner(name)
// {
//     console.log(name)
// }



// const x= 'exmusmy'
// function outter1(fn) {
//     fn(x)
// }
// outter1(inner)

// function sum(a ,b) {
//     console.log(a+b)
// }

// function outter3(fn) {
//     fn()
// }

// outter3(sum)


// function Outer2() {
//     const inner = () => {
//       console.log("I AM INNER FUNCTION");
//     };
//     return inner;
//   }
  
//   const  z = Outer2();
//   // consy z = inner
//   z()
// const func = ()=>{
//     console.log("haroon dost")
// }
// function read(fn) {
//     fn()
// }
// read(func)
// let grade = 565;
// const totalMarks=100;
// function result() {
//     if (grade>=90 && grade <=totalMarks) {
//         console.log("pass")
//     }else if(grade > totalMarks){
//         console.log("error")
//     }
//     else{
//         console.log("fails")
//     }
// }



// function exam(fn) {
//     fn()
// }
// exam(result)

// function attack(a,b) {
//     console.log(`attack with ${a} and attck with ${b}`)
// }
// attack("bomb" , "rifle")





// first class citizen


// function inner() {
//     console.log("hello")
// }

//function as a argument
// function outter(fn) {
//     fn()
// }
// outter(inner)

//function take function as  return


// function outter2() {
//     function inner() {
//         console.log("hello")
//     }
//     return inner;
// }

// const z= outter2()
// z()


// "use strict";

// let value =10;
//  value =20;
// console.log(value)


// const friends =["ali","Hassan"]
// friends.push("Haroon")

// console.log(friends.length)


// const arr = ['ali','shahzad','muhammad']
// console.log(arr[0,2])

//Find Squre
function findSqure(a){
    return a*a
    
}
let x=findSqure(2)
console.log(x)
//Find Fahrenhit
function calFahrenheit() {
let Celsius=50
    let Fahrenheit = Celsius * 9/5 + 32; 
    return Fahrenheit
    
}
const z = calFahrenheit()
console.log(z)

//TELLFORTUNE FUNTION
function tellFortune(noofChildren,parentName,Location,JobTitle) {
    return (`Number of Childs are${noofChildren} of ${parentName} live in ${Location} and Ali Do ${JobTitle}`)
}


const d= tellFortune(4 ,"Ali and Aliya" ,"Lahore","Engineer")
console.log(d)

























