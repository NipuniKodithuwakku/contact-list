const express=require('express');
const router=express.Router();

const contact=require('../models/contact');

//get data
router.get('/contacts',(req,res)=>{
    contact.find(function(err,contacts){
        res.json(contacts);
    })
    
})

router.post('/contact',(req,res)=>{
    let c=new contact({
            "first_name":req.body.first_name,
            "last_name":req.body.last_name,
            "phone":req.body.phone
        });
    c.save((err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            res.json(result)
        }
    })
})

module.exports=router;