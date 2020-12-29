const express = require("express");
const router = express.Router();

router.get("/articles",(req, res)=>{
    res.send("categorias")
});

router.get("/admin/articles",(req,res)=>{
    res.send("New articles")
});

module.exports=router;