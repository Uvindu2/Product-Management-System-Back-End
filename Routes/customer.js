const express=require('express');
const Customer=require('../Models/customer');
const{exists}=require('../Models/customer');
const router=express.Router();


router.post('/customer/save',(req,res)=>{
    let newCustomer= new Customer(req.body); 
    newCustomer.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"Customer Register Fail "+err
                
            });
        }
        
            return res.status(200).json({
                success:"Customer Register Successful"
            });
        
    });
});

router.get('/customer',(req,res)=>{
    Customer.find().exec((err,customer)=>{
        if(err){
            return res.status(400).json({
                error:+err
            })        
        }
        return res.status(200).json({
            success:true,
            existingCustomer:customer
        })
    });
});

router.put('/customer/update/:id',(req,res)=>{
    Customer.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,customer)=>{
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

router.delete('/customer/delete/:id',(req,res)=>{
    Customer.findByIdAndRemove(req.params.id).exec((err,deletedCustomer)=>{
        if(err){
            return res.status(400).json({
                message:"Deleted Unuccessful"+err
       
            })
        }
        return res.json({
            success:true,
            message:"Deleted Successful",deletedCustomer
     
        });
    });
});

router.get("/customer/:id",(req,res)=>{
    let cus_Id=req.params.id;
    Customer.findById(cus_Id,(err,customerlist)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({success:true,
        customerlist
        })
    })
});

module.exports=router;