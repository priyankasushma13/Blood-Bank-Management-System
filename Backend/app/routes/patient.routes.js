module.exports=app =>{
    const patients = require("../controllers/patient.controller.js");
    var router =require("express").Router();
    router.post("/",patients.create);
    router.get("/",patients.findAll);
   // router.get("/",patients.findAllPublished);
    router.get("/:field&:data",patients.findMultiple);
    router.get("/:id",patients.findOne);
    router.put("/:id",patients.update);
    router.delete("/:id",patients.delete);
    router.delete("/",patients.deleteAll);
    app.use('/api/patients',router);
    
};