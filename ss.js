// const users = [
//  { name: "Mohit", city: "Delhi" },
//  { name: "Amit", city: "Delhi" },
//  { name: "Rohit", city: "Noida" }
// ]; 

// let group = {};

// for(let i = 0; i<users.length; i++){

//     let user = users[i]
//     if(!group[user.city]){
//         group[user.city] = []
//     }
//     group[user.city].push(user)
// }
// console.log(group)

const users = [
 { name: "Mohit", city: "Delhi" },
 { name: "Amit", city: "Delhi" },
 { name: "Rohit", city: "Noida" }
]; 
let group = {}
let b = users.reduce((curr,acc)=>{
  if(!group[curr.city]){
    group[curr.city] = []
  }
  group[curr.city].push(curr)
  return acc
},{})
console.log(b)