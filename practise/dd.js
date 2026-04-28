// let a = [2,7,11,15];
// let target = 9;
// let feq = {}

// for(let i = 0; i<a.length; i++){
//     let needed = target - a[i];
//     if(feq[needed]!==undefined){
//         console.log(feq[needed],i) 
//         break;
//     }else{
//         feq[a[i]] = i 
//     }  
// }  

// let a = "aniket"; 
// let b = "";

// for(let i = a.length-1; i>0; i--){
//     b+=a[i]
// }
// console.log(b)

// let a = "aniket"; 

// let b = 1
// for(let i = 0; i<a.length; i++){
//     if(b<a.length){
//           a[i] = a[a.length-b]
//     b++
//     }
  
// } 
// console.log(a)    

// let a = [4,2,9,1,7];
// let feq = {

// }
// for(let i = 0; i<a.length; i++){
//     let max= 0
//     if(a[i]&&a[i+1]){
//    max =  a[i]+a[i+1] 
//          feq[a[i],a[i+1]] = max 
    
//     }else if(a[i]&&!a[i+1]){
//         max = a[i]
//         feq[a[i]]=max
//     }
    
// }
// console.log(feq)
// let a = [4,2,9,1,7];

// let max = a.reduce((acc, curr)=>{ 
//    return curr > acc ? curr : acc 
// }, a[0])   

// console.log(max) 

// let a = [2,9,1,3,7]; 

// let result = a.reduce((acc, curr)=>{   
     
//     if(curr > acc.max){  
//         acc.secondMax = acc.max; 
//         acc.max = curr;  
//     } 
//     else if(curr > acc.secondMax && curr !== acc.max){  
//         acc.secondMax = curr;  
//     }
       
//     return acc;

// }, {max: -Infinity, secondMax: -Infinity}) 
 
// console.log(result.secondMax);

// let a = [2,5,1,2,3,5,1,2,4]

// let map = new Set();

// a.forEach(el => {
//     if(map.has(el)){
//         console.log("mil gya",el)
//         break;
//     }else{
//         map.add(el)
//     }
// });
// let a = [2, -3, 4,5,5,5,5,5, -1, 6, -9];
//  let left = 0
//  let positive = 0
// for(let i = 0; i<a.length; i++){
    
//     if(a[i]<0){ 
//         let temp = a[i] 
        
//         a[i] = a[left]    
//         a[left] = temp
//         left++ 
//     }else{
//         positive++
//     }
// }
// console.log(a) 
// console.log(positive)

// let a = "i love javascript programming";

// let b = a.split(" ")
// let max = 0
// let word = ""
// for(let i = 0; i<b.length; i++){
//     let n = b[i].length
//        if(n>max){
//         word = b[i]
//         max = n 
//        } 
// }
// console.log(max+word)

// let p = "(())"

// for(let i = 0; i<p.length; i++){
// let s = p[i]
// if(s==="("&&p[i+1]===")"||s==="{"&&p[i+1]==="}"||s==="["&&p[i+1]==="]"){
//     console.log("hurrray")
//     break;
// }else{
//     console.log("not hurray")
// }
// }
// ({ lt:0,  h:0}
// console.log(lt)


// )
// function isValid(p){

//    let stack = [];

//    for(let i = 0; i < p.length; i++){

//       let ch = p[i];

//       if(ch === "(" || ch === "{" || ch === "["){
//          stack.push(ch);
//       }
//       else{
//          let last = stack.pop();

//          if(
//             (ch === ")" && last !== "(") ||
//             (ch === "}" && last !== "{") ||
//             (ch === "]" && last !== "[")
//          ){
//             return false; 
//          }
//       }
//    }"[({})]"

//    return stack.length === 0;
// }

// console.log(isValid("()"));      // true
// console.log(isValid("(())"));    // true
// console.log(isValid("{({})}"));    // true
// console.log(isValid("(]"));      // false

// let a= "(})"

// let stack =[];

// for(let i = 0; i<a.length; i++){
//     let ch = a[i];
//     if(ch==="("||ch==="{"||ch==="["){
//         stack.push(a[i])
//     }else{
//         let last = stack.pop()
//         if((ch===")"&&last!=="(")||(ch==="}"&&last!=="{")||(ch==="]"&&last!=="[")){
//             return false
//         }
//     }
   
// }

//  console.log(stack.length ===0);  
   






// let aniket = "aniket sharma"

// let arr = [1,2,3,4];
// let left = 0;
// let right = arr.length - 1;

// while(left < right){
//    let temp = arr[left];
//    arr[left] = arr[right];
//    arr[right] = temp;

//    left++;
//    right--;
// }

// console.log(arr); 
// let n = 7;
// let isPrime = true;

// if(n <= 1){
//    isPrime = false;
// }

// for(let i = 2; i < n; i++){
//    if(n % i === 0){
//       isPrime = false;
//       break;
//    }
// }

// console.log(isPrime);

// let n = 50;
                                                                                  
// for(let num = 1; num<=50;num++){
//     let isPrime = true

//      if(num<=1){
//         isPrime = false
//     } 
//     for(let i = 2;i<num;i++){
//     if(num % i === 0){
//         isPrime = false
//         break;
//       }
//     }
//     if(isPrime){
//         console.log(num)
//     }

// }
// let n = 10; 
// for(let num = 1; num<=n;num++){
//     let prime = true;
//     if(num<=1){
//         prime = false
//     }
//     for(let i = 2;i<num;i++){
//         if(num%2===0){
//             prime = false 
//         }
//     }   
//     if(prime){
//         console.log(num)
//     }
// }                        


// let a = [1,2,3,4,5];
// let left = 0;
// let right = a.length-1;
// while(left<right){
//     let temp = a[left]
//     a[left] = a[right]
//     a[right] = temp
//     left++    
//     right--
// }
// console.log(a) 

// let a = [1,2,3,4,5,6,7]; 
// let target = 6;
// let left = 0;
// let right = a.length-1;

// while(left<=right){
//     let mid = Math.floor((left+right)/2);
//     if(a[mid]===target){
//         console.log(a[mid]);
//     }else if(arr[mid]<target){  
//         left = mid+1;
//     } 
//     else{
//         right = mid+1;
//     }  
// }    


// a = Math.floor(3.9)
// console.log(a)


// let arr = [7,6,5,4,3,2,1];
// let target = 2;

// let left = 0;
// let right = arr.length - 1;

// while(left <= right){

//     let mid = Math.floor((left + right) / 2);

//     if(arr[mid] === target){
//         console.log("Found at index:", mid);
//         break;
//     }
    
//     // DESCENDING LOGIC
//     else if(arr[mid] > target){
//         left = mid + 1;
//     }
//     else{
//         right = mid - 1;
//     }
// }



// let p = "ama"
// let r = ""
// for(let i =p.length-1 ; i>=0; i--){
//     r+=p[i]

// }
// console.log(r===p)

// let a = [4,7,1,9,2];
// let max = a[0] 
// let smax = a[1];

// for(let i = 0; i<a.length; i++){
//     if(a[i]>max){
//         smax=max   
//         max=a[i]
//     }else if(a[i]>smax && smax!==max){
//         smax = a[i]
//     }
// }
// console.log(smax) 

// let a = "i love js";
// let b = a.split(" ")
// let left = 0;
// let right = b.length-1
// // for(let i = b.length; i>=0; i++){
         
// //    b[i] 
// // }
// while(left<right){
//     let temp = b[left]
//     b[left] = b[right]
//     b[right] = temp
//     left++
//     right--
// }
// console.log(b.join(" "))

// let a ="listen";
// let b = "silent";

// console.log(a.split("").sort().join(""))
// console.log(b.split("").sort())
// a = [1,2,39,3,7,4,10]
// console.log(a.sort((a,b)=>b-a))\\

// console.log("5"+5)


// function add(a){
//   return function(b){
//     if(b !== undefined){
//       return add(a + b)
//     }
//     return a
//   }
// }

// console.log(add(2)(3)()); // 14  aniket sharma 


// function add(a){
//     return function(b){
//         if(b!==undefined){
//             return add(a+b)  

//         }
//         return a
//     }
// }

// console.log(add(5)(5)())   

// function p(a){
//     return function add(b){
//         if(b!==undefined){
//                    return p(a+b) 

//         }
//         return a 
//     }
// }
// console.log(p(1)(2)())     
// function sum(total){
//     return function(next){
//         if(next !== undefined){
//             return sum(total + next)
//         }
//         return total
//     }
// }

// console.log(sum(1)(2)()) // 3   


// let nums = [3, 2, 4]
// target = 6 


// function twoSum(nums, target){
//   for(let i=0; i<nums.length; i++){
//     for(let j=i+1; j<nums.length; j++){
//       if(nums[i] + nums[j] === target){
//         return [i, j]
//       }
//     }
//   }
// }

// console.log(twoSum([1,2,11,15,9,7], 9)); 

// let a = "javascript";
// let v = "aeiou"
// let count = 0;
// for(let i = 0; i<a.length; i++){

//     if(v.includes(a[i])){
//         count++
//     }
// }
// console.log(count)
// let a  = "aabbcdd"

// let map = {}

// for(let char of a){
//     if(map[char]){
//         map[char]+=1
//     }else{
//         map[char] = 1
//     }
  
// }
//   for(let char of a){
//         if(map[char]===1) {
//             console.log(char)
//             break;
//         }
//     }  

// let n = 8;
// let f =1
// for(let i = n; i>=1 ;i--){
//     f =f*i   
// }
// console.log(f)  

// function hello(a){
//     if(a===0) return
//      hello(a-1)
// }
// console.log(hello(5))
// function hello(n){
//   if(n === 0) return "hey"
//   hello(n-1)
// }

// console.log(hello(9))

// function hello(n){
//   if(n === 0) return
//   console.log(1+1)
//   hello(n-1) 
// }

// hello(3)
// function factorial(n){
//   if(n === 0 || n === 1){
//     return 1
//   }

//   return n * factorial(n-1)
// }
// factorial(5)


// let arr = [1,2,3,4,5];

// let first = 0;
// let right = arr.length-1;

// let temp = arr[first]
// arr[first] = arr[right]
// arr[right] = temp;

// console.log(arr)

// let a = 10;
// let b = 20;

// function swap(x,y){
//   let temp = x;
//   x = y;
//   y = temp;
//   return [x,y]
// }

// console.log(swap(a,b))


// const http = require("http");
// const fs = require("fs");
// const { Transform } = require("stream");
// const cluster = require("cluster");
// const os = require("os");

// const totalCPUs = os.cpus().length;

// if (cluster.isPrimary) {
//   console.log(`Primary process running: ${process.pid}`);
//   console.log(`Forking ${totalCPUs} workers...\n`);

//   // jitne CPU cores utne workers
//   for (let i = 0; i < totalCPUs; i++) {
//     cluster.fork();
//   }

//   // agar koi worker crash ho jaye to naya bana do
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died. Restarting...`);
//     cluster.fork();
//   });

// } else {

//   // yeh code har worker me chalega
//   const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//       res.end(`hey from worker ${process.pid}`);
//     }

//     else if (req.url === "/transform") {

//       const readStream = fs.createReadStream("jack.txt", "utf8");

//       const upperCaseStream = new Transform({
//         transform(chunk, encoding, callback) {
//           const modified = chunk.toString().toUpperCase();
//           this.push(modified);
//           callback();
//         }
//       });

//       res.writeHead(200, { "Content-Type": "text/plain" });

//       readStream
//         .pipe(upperCaseStream)
//         .pipe(res);

//       readStream.on("error", () => {
//         res.statusCode = 500;
//         res.end("File not found");
//       });
//     }

//     else if (req.url === "/pdf") {

//       const stream = fs.createReadStream(
//         "C:/Users/Lenovo/Downloads/Aniket_Sharma_Resume_2 (2).pdf"
//       );

//       res.writeHead(200, {
//         "Content-Type": "application/pdf"
//       });

//       stream.pipe(res);

//       stream.on("error", () => {
//         res.statusCode = 404;
//         res.end("File not found");
//       });
//     }

//   });

//   server.listen(3000, () => {
//     console.log(`Worker ${process.pid} started on port 3000`);
//   });
// }
// const http = require("http");
// const fs = require("fs");
// const { Transform } = require("stream");
// const cluster = require("cluster");
// const os = require("os");
// const redis = require("redis");

// const totalCPUs = os.cpus().length;

// if (cluster.isPrimary) {

//   console.log(`Primary process running: ${process.pid}`);

//   for (let i = 0; i < totalCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker) => {
//     console.log(`Worker ${worker.process.pid} died. Restarting...`);
//     cluster.fork();
//   });

// } else {

//   // 🔴 Redis connection (har worker karega)
//   const client = redis.createClient();

//   client.connect().then(() => {
//     console.log(`Worker ${process.pid} connected to Redis`);
//   });

//   const server = http.createServer(async (req, res) => {

//     if (req.url === "/") {

//       // hit counter in Redis (shared across workers)
//       let visits = await client.incr("visits");

//       res.end(`Hello from ${process.pid} | Total visits: ${visits}`);     
//     }   

//     else if (req.url === "/transform") {

//       const readStream = fs.createReadStream("jack.txt", "utf8");

//       const upperCaseStream = new Transform({
//         transform(chunk, encoding, callback) {
//           this.push(chunk.toString().toUpperCase());
//           callback();
//         }
//       });

//       readStream.pipe(upperCaseStream).pipe(res);
//     }

//     else if (req.url === "/pdf") {

//       const stream = fs.createReadStream(
//         "C:/Users/Lenovo/Downloads/Aniket_Sharma_Resume_2 (2).pdf"
//       );

//       res.writeHead(200, {
//         "Content-Type": "application/pdf" 
//       });

//       stream.pipe(res);
//     }

//   });

//   server.listen(3000, () => {
//     console.log(`Worker ${process.pid} running`);
//   });
// }
// const http = require("http");
// const fs = require("fs");
// const { Server } = require("socket.io");

// const server = http.createServer((req,res)=>{
//   if(req.url === "/"){
//     fs.createReadStream("index.html").pipe(res)
//   }
// })

// const io = new Server(server);
           
// io.on("connection",(socket)=>{ 
//   console.log("User connected") 

//   // jab frontend event bheje
//   socket.on("changeText",(data)=>{
//     console.log("Received:", data)

//     // sabko broadcast
//     io.emit("updateText", data) 
//   }) 

// })

// server.listen(3000,()=>{
//   console.log("Server running on 3000")
// }) 
// const express = require("express");
// const redis = require("redis");

// const app = express();

// // redis connect
// const client = redis.createClient();
// console.log(client)
// client.on("error", (err) => console.log("Redis error:", err));

// (async () => {
//   await client.connect();
//   console.log("Connected to Redis");
// })();

// // limits
// const USER_LIMIT = 5;  
// const IP_LIMIT = 20;   
// const WINDOW = 60; // seconds

// // rate limiter middleware
// async function rateLimiter(req, res, next) {

//   try {
//     const userId = req.headers.userid;
//     const ip =
//       req.headers["x-forwarded-for"] ||
//       req.socket.remoteAddress;

//     // keys
//     const userKey = `rate:user:${userId}`; 
//     const ipKey = `rate:ip:${ip}`;

//     // increment counters 
//     const userRequests = userId 
//       ? await client.incr(userKey)
//       : 0; 

//     const ipRequests = await client.incr(ipKey);  

//     // expiry set first time
//     if (userRequests === 1) {
//       await client.expire(userKey, WINDOW);   
//     }

//     if (ipRequests === 1) { 
//       await client.expire(ipKey, WINDOW);
//     }

//     // check limits
//     if (userId && userRequests > USER_LIMIT) {
//       return res.status(429).json({
//         error: "User rate limit exceeded"
//       });
//     }

//     if (ipRequests > IP_LIMIT) {
//       return res.status(429).json({
//         error: "IP rate limit exceeded"
//       });
//     }

//     next();

//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// }

// // endpoint
// app.get("/data", rateLimiter, (req, res) => {
//   res.json({
//     message: "Data fetched successfully",
//     worker: process.pid
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

const express = require("express");
const redis = require("redis");
const app = express();
const client = redis.createClient({
  url: "redis://redis:6379"
});client.on("error",(error)=>console.log("err"));
  (async()=>{
    await client.connect();
    console.log("i am connected") 
  })()
//limit
const userlimit = 5;
const iplimit = 1;
const window = 60;

async function rateLimiter  (req,res,next) {
  try{
    const userid = req.header.userid;
    const ip = req.header["x-forwarded-for"]||
    req.socket.remoteAddress;

      const userkey = `rate:user:${userid}`;
      const ipkey = `rate:ip:${ip}`;

      // increment 
      const userRequests = userid
      ? await client.incr(userkey):0;

      const ipRequests = ipkey? 
      await client.incr(ipkey):0;

      //expiry set first time

      if(userRequests === 1){
        await client.expire(userkey,window)
      }
      if(ipRequests ===1 ){
        await client.expire(ip,window) 
      } 
//checklimijt

if(userid&&userRequests>userlimit){
  return res.status(429).json({
    error:"user rate limit exceed"
  })
}
if(ipRequests> iplimit){
 return res.status(429).json("exceeded")
}
next();
    
  }catch(err){
    res.status(500).send("servererror")
  }
  //keys
}

app.get("/data",rateLimiter,(req,res)=>{
  res.json({
    message:"data fetched",

  })
})

  app.listen(3000,()=>{ 
    console.log("conec")  
  })

