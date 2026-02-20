
const rateLimit = require('express-rate-limit')

  const Iplimiter = (req,res)=>{
    // const {UserID} = req.header
  const Iplimiter = rateLimit({
    windowMs: 1*60*1000,
    max:20,
    ipKeyGenerator:(req)=>req.ip,
    message:{
        status:429,
        error:"too many request, please try again later"
    },
    standardHeaders:true,
    legacyHeaders:false,
  });
 

}
const Userlimiter = (req, res)=>{
       const Userlimiter = rateLimit({
    windowMs: 1*60*1000,
    max:5,
    KeyGenerator :(req)=>req.header?.UserID||req.ip,
    message:{
        status:429,
        error:"too many request, please try again later"
    },
    standardHeaders:true,
    legacyHeaders:false,
  });
}
module.exports = {Iplimiter,Userlimiter}