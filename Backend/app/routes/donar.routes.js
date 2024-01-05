module.exports=app =>{
    const donars = require("../controllers/donar.controller.js");
    var router =require("express").Router();
    router.post("/",donars.create);
    router.get("/",donars.findAll);
    // router.get("/",donars.findAllPublished);
    router.get("/:field&:data",donars.findMultiple);
    router.put("/:id",donars.update);
    router.delete("/:id",donars.delete);
     router.delete("/",donars.deleteAll);
    app.use('/api/donars',router);
    
};