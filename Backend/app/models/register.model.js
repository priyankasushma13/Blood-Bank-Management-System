module.exports=mongoose=>{
    const Register=mongoose.model(
        "register",//model name(table)
        mongoose.Schema(
            {
                uname: String,
                mobile: String,
                pwd: String,
                cpwd:String       
            },
            {timestamps:true}//record published time
        )
    );
    return Register;
};