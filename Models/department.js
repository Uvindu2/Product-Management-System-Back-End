const mongoose=require('mongoose');
const {stringify}=require('querystring');
const departmentschema=new mongoose.Schema({

    departmentName:{
        type:String,
         required:true
    },

});
module.exports=mongoose.mongoose.model('Department',departmentschema);