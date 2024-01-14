import express from 'express';
import user from '../model/user.js';


const router=express.Router();
router.post('/add',async(request,response)=>{
   const User=request.body;
   const NewUser=new user(User);
   console.log(NewUser);

   try{
    await NewUser.save();
    response.status(201).json(NewUser);
   }
   catch(e){
    console.log("Error :",e);
    response.status(400).json({"Error":e.message});
   }
});


export default router;