const dbConfig=require("../config/db.config.js");
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;
const db={};
db.mongoose=mongoose;
db.url=dbConfig.url;
 db.donars=require("./donar.model.js")(mongoose);
 db.patients=require("./patient.model.js")(mongoose);
 db.registers=require("./register.model.js")(mongoose);
 db.availabilitys=require("./availability.model.js")(mongoose);
module.exports=db;