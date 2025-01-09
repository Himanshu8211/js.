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

