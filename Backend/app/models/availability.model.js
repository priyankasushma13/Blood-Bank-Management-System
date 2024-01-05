module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            AvailabilityId:Number,
            BloodGroup:String,
            BloodAmount:String,
        },
        {timestamps:true}
    );
    schema.method("toJSON",function(){
        const {__v,_id, ...object}=this.toObject();
        object.id=_id;
        return object;
    });
    const Availability=mongoose.model("availability",schema);
    return Availability;
    };