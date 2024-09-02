const express= require("express");
const router= express.Router();
const person= require("../models/person");

router.post('/',async (req,res)=>{
    /*const data=req.body;
    const newPerson= new person(data);
    /*
    const newPerson= new person();
    newPerson.name=data.name;
    newPerson.age=data.age;
    newPerson.mobile=data.mobile;
    
  
    newPerson.save((error,savedPerson)=>{
      if(error){
        console.log("Error: ",error);
        res.status(500).json({error:"internal server error"});
      }
      else{
        console.log("data saved");
        res.status(200).json(savedPerson);
      }
    })*/
  
      try{
        const data=req.body;
        const newPerson= new person(data);
  
        const respone= await newPerson.save();
        console.log("data saved");
        res.status(200).json(respone);
      }
  
      catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
      }
  
  
  
  
  })
  
  router.get('/',async(req,res)=>{
    try{
      const data= await person.find();
      console.log("data fetched successfully");
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
  })

  router.get('/:workType',async (req,res)=>{
    try{
      const workType= req.params.workType;
      if(workType=='Manager' || workType=='Cheif' || workType=='Waiter' || workType=='Housekeeping'){
        const respone= await person.find({work:workType});
        console.log("Responded");
        res.status(200).json(respone);
      }
      else{
        console.log("Invalid Work type");
        res.status(404).json({error:"Invalid Work Type"});
      }
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: "Internal server error"});
    }
  })


  router.put("/:id", async (req,res)=>{
    try{
        const personId=req.params.id;  //extract ID from the Endpoint
        const updatedPerson= req.body; // Extract updated data, and store at this variable
        const respone = await person.findByIdAndUpdate(personId,updatedPerson,{
            new: true,
            runValidators:true
        })
        // if Id given by user is wrong, then response will store an error

        if(!respone){
            return res.status(404).json({error:"Invalid Id Given"});
        }
        console.log("Data Updated");
        res.status(200).json(respone);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
  })

  router.delete("/:id",async (req,res)=>{
   try{
    const personId= req.params.id;
    const respone = await person.findByIdAndDelete(personId);
 
    if(!respone){
      return res.status(404).json({error:"Invalid ID"});
    }
    console.log("deleted");
    res.status(200).json(respone);
   }
   catch(err){
      console.log(err);
      res.status(500).json({error: "Internal server error"});
   }
  })

  module.exports=router;