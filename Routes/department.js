const express=require('express');
const department=require('../Models/department');
const{exists}=require('../Models/department');
const router=express.Router();


router.post('/department/save',(req,res)=>{
    let newdepartment= new Department(req.body); 
    newdepartment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"department Register Fail "+err
                
            });
        }
        
            return res.status(200).json({
                success:"department Register Successful"
            });
        
    });
});

router.get('/department',(req,res)=>{
    department.find().exec((err,department)=>{
        if(err){
            return res.status(400).json({
                error:+err
            })        
        }
        return res.status(200).json({
            success:true,
            existingdepartment:department
        })
    });
});

router.put('/department/update/:id',(req,res)=>{
    department.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,department)=>{
            if(err){
                return res.status(400).json({
                    error:"Update Errpr"+err
                })        
            }
            return res.status(200).json({
                success:true,
             
            })
        }
    )
})

router.delete('/department/delete/:id',(req,res)=>{
    department.findByIdAndRemove(req.params.id).exec((err,deleteddepartment)=>{
        if(err){
            return res.status(400).json({
                message:"Deleted Unuccessful"+err
       
            })
        }
        return res.json({
            success:true,
            message:"Deleted Successful",deleteddepartment
     
        });
    });
});

router.get("/department/:id",(req,res)=>{
    let cus_Id=req.params.id;
    department.findById(cus_Id,(err,departmentlist)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({success:true,
        departmentlist
        })
    })
});

module.exports=router;