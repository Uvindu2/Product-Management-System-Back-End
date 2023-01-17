const express=require('express');
const User=require('../Models/login');
const{exists}=require('../Models/login');
const router=express.Router();

router.post('/user/create-user',(req,res)=>{
    let newUser= new User(req.body); 
    newUser.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"User Register Fail "+err
                
            });
        }
        
            return res.status(200).json({
                success:"User Register Successful",

            });
        
    });
});

router.get("/user/:id",(req,res)=>{
    let user_id=req.params.id;
    User.findById(user_id,(err,userlist)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({success:true,
        userlist
        })
    }) 
});

router.get('/users',(req,res)=>{
    User.find().exec((err,user)=>{
        if(err){
            return res.status(400).json({
                error:+err
            })        
        }
        return res.status(200).json({
            success:true,
            users:user
        })
    });
});

module.exports=router;