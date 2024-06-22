// const FirstModule = require("./main-funcs.js");
// import { SayWelcome } from "./main-funcs.js";
// console.log("hello arshia");
// const name = "arshia";
// let age = 15;
// let isActive = true;
// const list = [5,"ali","reza",10,20,11,21];
// const person = [{
//     firstname: "ali",
//     lastname: "rezaei",
//     age: 19,
// },
// {
//     firstname: "ahmad",
//     lastname: "khosravi",
//     age: 26,
// },
// {
//     firstname: "hassan",
//     lastname: "alavi",
//     age: 30,
// },
// {
//     firstname: "hossein",
//     lastname: "miri",
//     age: 28,
// }];

import SayHello2 from "./main-funcs";

// console.log(list.pop());
// console.log(list.shift());
// console.log(list.slice(2,5));
// console.log(list.push());
// console.log(list.unshift());
// console.log(list.splice(2,0,17));

// person.firstname = "mohsen"
// person.lastname = "ramedani"
// person.mobile = "09320255825"
// delete person.age
// console.log(person)

// const car = {
//     name: "Aventador",
//     "speed(per-h)": "450(km)",
//     company: "Lamborgini",
//     power: "1320(hp)"
// };

// person[1]["firstname"] = "mohammad"
// console.log(person)
// person[1].firstname = "mohammad"
// console.log(person)

// person[1]["mobile"] = "0911111111"
// console.log(person)

// person.push(
// {    firstname: "hamid",
//     lastname: "lolaei",
//     age: 67,
// })
// console.log(person)

// let num = "20"
// if (num === 20){
//     console.log(num = 10)
// }else if (num === 10){
//     console.log(num = 20)
// }else {
//     console.log(num = 0)
// }

// let num2 = 20
// if (num2 === 20){
//     console.log(num2 = 10)
// }else if (num2 === 10){
//     console.log(num2 = 20)
// }else {
//     console.log(num2 = 0)
// }

// for (const index of person) {
//     if (index.age > 20 && index.age < 30){
//         console.log(index)
//     }
// }

// const score = (20)
// switch (score) {
//     case 10 : {
//         console.log("NOT GOOD")
//         break
//     }
//     case 15 : {
//         console.log("GOOD")
//         break
//     }
//     case 20 : {
//         console.log("GREAT")
//         break
//     }
// }

// for (let n = 0 ; n <= 10 ; n += 1) {
//     if (n === 2) {
//         console.log(n)
//     }else{
//         console.log(n + " but its not 2")
//     }

// }

// let count = 1;

// while (count <= 10) {
//     console.log("hello")
//     count++
// }

// do {
//     console.log("hello")
//     count++
// }while (count <= 5)

// for (let n = 0 ; n <= 10 ; n++){
//     if (n % 2 == 0){
//         continue
//     }
//     console.log(n)
// }

// let number = 0
// while (number <= 100) {
//     if (number % 2 == 0){
//         console.log(number)
//     }
//     number++
// }

// const numbers = []

// for(let n = 1 ; n <= 100 ; n++){
//     let counter = 0
//     for(let num = 1 ; num <= n; num++){
//         if ( n % num == 0){
//             counter++
//         }
//     }

//     if (counter == 2){
//         numbers.push(n)
//     }
// }

// function SayHello(){
//     console.log("Hello")
// }
// SayHello()

// function sumNumbers(n1 , n2){
//     const sum = n1 + n2
//     return sum
// }
// console.log(sumNumbers(2 , 3))

// "for optional funcions"
// function SayHello2({Firstname = " " , Lastname = " "}) {
//     console.log(Firstname + Lastname)
// }

// function SayWelcome({Firstname = " " , Lastname = " "}) {
//     console.log(`Welcome ${Firstname} ${Lastname}`)
// }

// function BiggerNum(n1,n2,n3) {
//     let Bigger = n1

//     if (n1 > n2 && n1 > n3){
//         Bigger = n1
//     }
//     if (n2 > n1 && n2 > n3){
//         Bigger = n2
//     }
//     if (n3 > n1 && n3 > n2){
//         Bigger = n3
//     }
//     console.log(Bigger)
// }
// BiggerNum(3,12,6)

// let numberlist = [1,4,5,7,9,12,67,32]
// function biglist(numlist){
//     let max = numlist[0]
//     for (let nums of numlist){
//         if (max < nums){
//             max = nums
//         }
//     }
//     return max
// }
// console.log(biglist(numberlist))

// const students = [
//     {
//     firstname: "ali",
//     lastname: "alavi",
//     dars:[
//         {
//             title: "riazi",
//             score: 17,
//         },
//         {
//             title: "farsi",
//             score: 20,
//         },
//         {
//             title: "arabi",
//             score: 19,
//         },
//     ],
//     age: 25
// },
//     {
//     firstname: "reza",
//     lastname: "hamidi",
//     dars:[
//         {
//             title: "riazi",
//             score: 19,
//         },
//         {
//             title: "farsi",
//             score: 18,
//         },
//         {
//             title: "arabi",
//             score: 16,
//         },
//     ],
//     age: 20
// },
//     {
//     firstname: "mohammad",
//     lastname: "akbari",
//     dars:[
//         {
//             title: "riazi",
//             score: 16,
//         },
//         {
//             title: "farsi",
//             score: 14,
//         },
//         {
//             title: "arabi",
//             score: 13,
//         },
//     ],
//     age: 18
// },
//     {
//     firstname: "hossein",
//     lastname: "ghiasi",
//     dars:[
//         {
//             title: "riazi",
//             score: 20,
//         },
//         {
//             title: "farsi",
//             score: 20,
//         },
//         {
//             title: "arabi",
//             score: 20,
//         },
//     ],
//     age: 19
// },
// ]

// for (const student of students) {
//     let scores = 0
//     for (const dars of student.dars) {
//         scores += dars.score;
//     }
//     const avg = (scores / student.dars.length).toFixed(2)
// }

// students.map((s) => {
//     let scores = 0
//     for (const dars of s.dars) {
//         scores += dars.score
//     }
//     const avg = (scores / s.dars.length).toFixed(2)
//     return {
//         ...s,
//         avg,
//     }
// })
// console.log(students)

// function getAge(m) {
//     return m.age
// }

// const ages = members.find(getAge);
// console.log(ages)

// const javona = members.filter((a) => a.age > 15)
// console.log(javona)

// const nameali = members.map((m) => m.firstname === "ali")
// console.log(nameali)

// const objNumbers = [
//     {id:1 , firstName: "ali" , age: 40},
//     {id:20 , firstName: "mohammad" , age: 21},
//     {id:19 , firstName: "ahmad" , age: 16},
//     {id:13 , firstName: "hossein" , age: 27},
//     {id:15 , firstName: "akbar" , age: 35},
//     {id:9 , firstName: "ilia" , age: 50},
//     {id:6 , firstName: "hamid" , age: 60},
// ]

// function sortlist(a,b) {
//     if(a.age > b.age){
//         return -1
//     }
//     if(a.age < b.age){
//         return 1
//     }
//     if(a.age == b.age){
//         return 0
//     }
// }

// console.log(objNumbers.sort(sortlist))

// console.log(objNumbers.every((i) => i.age < 61))

// console.log(objNumbers.some((i) => i.age < 21))

// let sumAge = 0
// objNumbers.forEach((i) => (sumAge += i.age))
// console.log(sumAge)

// const numslist = [1,6,7,8,3,2,4,9,]

// const c = numslist.length
// for(let i = 0 ; i < c ; i++){
//     for(let j = 0 ; j < c - i - 1 ; j++ ) {
//         if(numslist[j] < numslist[j + 1]) {
//             const temp = numslist[j]
//             numslist[j] = numslist[j + 1]
//             numslist[j + 1] = temp
//         }
//     }
// }
// console.log(numslist)

// let a = 6
// console.log(a === 10 || a < 8 ? a / 2 : a)

// try {
//     const a = 10
//     a = 9
// } catch (e) {
//     console.log("khata")
// }

// FirstModule();
// SayWelcome();

