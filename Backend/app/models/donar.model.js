module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
           DonarId:Number,
           DonarName:String,
           BloodGroup:String,
           Dob:String,
           Gender:String,
           Age:Number,
           City:String,
           State:String,
           phoneNumber:Number,
           Email:String,
           LastDonatedDate:String,
           BloodAmount:String
        },
        {timestamps:true}
    );
    schema.method("toJSON",function(){
        const {__v,_id, ...object}=this.toObject();
        object.id=_id;
        return object;
    });
    const Donar=mongoose.model("donar",schema);
    return Donar;
    };