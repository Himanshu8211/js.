// data is categorised on the basis of how data is in memory and how it is access.

/* there are two type of data type.
>premitive(they are call by value. changes done in cope and in actual refrence)
     7 types: String, Number, Boolean,null,undefined,symbol BigInt 

> Refrence type or non premitive (there refrence are directly in memory) 
     array,object , functions.
     
     in java script  the language is not defined. it is dyanimic type language
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideeTemp = null 
let userEmail;


//const id = symbol('123')
//const anotherId = symbol('123')
//console.log(id === anotherId)



const heros =["Thor","shaktimaan"];
let myObj ={
    name :'Himanshu',
    Age:'19',
}

// in js function can be treat as variable
 const myFunction = function(){
    console.log('hello world')
 }

 console.log (typeof 'myFunction') //=> it tells about type 


//https://262.ecma-international.org/5.1/#sec-11.4.3








 //********************************************* *//

 //stack memory(primitive) // heap memory(non-premitive).
 // when varaible is define in stack then we got a copy and in heap memory we get refrence

 let myName = "Himanshu"
 
 let anothername = myName
 anothername = "dubey"
 console.log(anothername)
 console.log(myName)


 let userOne = {
     email:"user123@gmail.com", 
     upId:"wyeqr49ru4"
 }
 console.log(userOne)

 let userTwo = userOne
 userTwo.email = "user456@gamil.com"// we acn acess object by. 
console.log(userTwo)
   
 
