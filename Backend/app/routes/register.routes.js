module.exports=app =>{
    const register = require("../controllers/register.controller.js");
    var router =require("express").Router();
    router.post("/",register.create);
    router.get("/",register.findAll);
    //router.get("/:id",register.findOne);
    router.get("/:uname",register.findOne);
    router.put("/:id",register.update);
    router.delete("/:id",register.delete);
    router.delete("/",register.deleteAll);
    app.use('/api/register',router);
    
};