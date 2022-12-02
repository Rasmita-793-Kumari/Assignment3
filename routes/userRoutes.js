const express=require('express');
const router=express.Router();
const {registration,login ,info}=require('../controllers/usercont');
router.get("/",(req,res)=>{
    let id=req.query.id;//get query param 
    res.render("user",{userid:id});
})
router.get("/welcome/:id",(req,res)=>{
    let email=req.params.id;
    res.render("welcome",{email:email})
})
router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/register",(req,res)=>{
    res.render("regis")
})

router.post('/postData',registration);
router.post('/login-data',login);
router.get('/info',info);
module.exports=router;