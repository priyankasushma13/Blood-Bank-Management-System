const express=require("express");
const cors=require("cors");
const app=express();
var corsOptions={
    origin:"http://localhost:8081"

};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const db=require("./app/models");
db.mongoose
.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    console.log("Connected to the database!");

})
.catch(err =>{
    console.log("Cannot connect to the database!",err);
    process.exit();
});
app.get("/",(req,res)=>
{
    res.json({message:"Welcome to first application"});
});
 require("./app/routes/donar.routes")(app);
require("./app/routes/patient.routes")(app);
require("./app/routes/register.routes")(app);
require("./app/routes/availability.routes")(app);
const PORT=process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}.`);
});
