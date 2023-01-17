const express=require('express');
const Posts=require('../Models/post');
const { exists } = require('../Models/post');
const router=express.Router();


router.post('/post/save',(req,res)=>{
    let newPost= new Posts(req.body); 
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"Error "+err
                
            });
        }
        
            return res.status(200).json({
                success:"Post Successful"
            });
        
    });
});

router.get('/post',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:+err
            })        
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        })
    })
})

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:"Update Errpr"+err
                })        
            }
            return res.status(200).json({
                success:"Update Successful"
            })
        }
    )
})

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err){
            return res.status(400).json({
                message:"Deleted Unuccessful"+err
       
            })
        }
        return res.json({
            message:"Deleted Successful",deletedPost
     
        });
    });
});

module.exports=router;