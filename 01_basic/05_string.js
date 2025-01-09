//string denote in single qoute or double quote

const name = 'HImanshu-hc-com'
const repoCount = 50

//console.log(name + repoCount + "value"); out dated

console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);//string interpolation. variable directly injects

const gameName = new String('Himanshu')//string declearation

console.log(gameName[0]);
console.log(gameName._proto_);


console.log(gameName.length);
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('h'))


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStringOne = "    himanshu     "
console.log(newStringOne.trim())

const url = "https://himanshu.com/himanshu%20dubey"
console.log(url.replace('%20','-'))

console.log(url.includes('1234'))

console.log(name.split('-'))
