module.exports=app =>{
    const availabilitys = require("../controllers/availability.controller.js");
    var router =require("express").Router();
    router.post("/",availabilitys.create);
    router.get("/",availabilitys.findAll);
    router.put("/:id",availabilitys.update);
    router.delete("/:id",availabilitys.delete);
    router.delete("/",availabilitys.deleteAll);
    app.use('/api/availabilitys',router);
    
};