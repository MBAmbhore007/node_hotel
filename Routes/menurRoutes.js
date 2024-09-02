const experss=require("express");
const router= experss.Router();
const menu= require("../models/menu");


router.post('/',async (req,res)=> {
    try{
      console.log('user selecting menu...');
      const data= req.body;
      const newMenu= new menu(data);
  
      const respone= await newMenu.save();
      console.log("User has given order ! ");
      res.status(200).json(respone);
  
    }
    catch(err){
      console.log("some error "+ err);
      res.status(500).json("Internal Server Issue");
    }
  })
  
  
  router.get('/',async (req,res)=>{
   try{
    const data= await menu.find();
    console.log("Data listed down !");
    res.status(200).json(data);
   }
   catch(err){
    console.log("error "+ err);
    res.status(500).json(err);
   }
  })

  router.put("/:id",async (req,res)=>{
    try{
    const menuId=req.params.id;
    const updatedMenu=req.body;
    const response= await menu.findByIdAndUpdate(menuId,updatedMenu,{
      new:true,
      runValidators:true
    });

    if(!response){
      return res.status(404).json({error:"Invalid ID"});
    }

    console.log("menu Updated");
    res.status(200).json(response);
    }
    catch(err){
    console.log("error "+ err);
    res.status(500).json(err);
    }
  })

  router.delete("/:id", async (req,res)=>{
    try{
      const menuId=req.params.id;
      const response= await menu.findByIdAndDelete(menuId);
      if(!response){
        return res.status(404).json({error: "Invalid ID"});
      }
      console.log("Menu has deleted");
      res.status(200).json("deleted");
    }
    catch(err){
    console.log("error "+ err);
    res.status(500).json(err);
      
    }
  })
  

  module.exports=router;
  