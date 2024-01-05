module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
           PatientId:Number,
           PatientName:String,
           BloodGroup:String,
           Dob:String,
           Gender:String,
           Age:Number,
           City:String,
           State:String,
           phoneNumber:Number,
           Email:String,
           BloodAmount:String,
           Reason:String
        },
        {timestamps:true}
    );
    schema.method("toJSON",function(){
        const {__v,_id, ...object}=this.toObject();
        object.id=_id;
        return object;
    });
    const Patient=mongoose.model("patient",schema);
    return Patient;
    };