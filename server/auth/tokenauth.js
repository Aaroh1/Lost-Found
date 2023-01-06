const jwt=require("jsonwebtoken");
const secret="ChomtasaSemcret1231231233297y4u0832u74e80231";
const model=require('../models/USER');
module.exports= (req,res,next)=>{
  try{
        const token=req.headers.cookie?.split('Token=')[1];
        if(!token)
        {
          console.log("Not found")
          return res.send('/');
        }decoded=jwt.verify(token,secret);
        model.findOne({_id:decoded.id}).then((user)=>
        {
        req.user=user.email;}
        );
        next();
      } catch(err) {
        console.log(err)
        return res.redirect('/login');
      }
    };








    