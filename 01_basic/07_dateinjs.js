  let myDate = new Date()
 /* console.log(myDate)


  console.log(myDate.toString())
  console.log(myDate.toDateString())// tells about date and day of week.
  console.log(myDate.toISOString())// tells about date and time */

  console.log(myDate.toJSON())//2025-01-09T17:54:52.598Z is output

  console.log(myDate.toLocaleDateString())
  console.log(myDate.toLocaleString())//1/9/2025, 5:56:57 PM

  console.log(typeof myDate)//object


  //let myCreatedDate = new Date(2023, 0, 23)
  //console.log(myCreatedDate.toDateString())



  let myCreatedDate = new Date("2023-01-14")
  console.log(myCreatedDate.toLocaleDateString())


 let myTimeStamp = Date.now()
 console.log(myTimeStamp) // in milli second

 console.log(myCreatedDate.getDate())

 console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 6 ) 

newDate.toLocaleString('default', {
    weekday:"long",
})


 
 