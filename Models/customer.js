const mongoose=require('mongoose');
const {stringify}=require('querystring');
const customerschema=new mongoose.Schema({

    firstName:{
        type:String,
         required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    telephone:{
        type:Number,
        required:true
    },
    postalCode:{
        type:Number,
        required:true
    },
    nic:{
        type:String,
        required:true
    }

});
module.exports=mongoose.mongoose.model('Customer',customerschema);