const db=require("../models");
const Availability=db.availabilitys;
exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const availability=new Availability({
        AvailabilityId:req.body.AvailabilityId,
        BloodGroup:req.body.BloodGroup,
        BloodAmount:req.body.BloodAmount
           });
    availability.save(availability)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating the Availability."
    });
});
};
exports.findAll=(req,res)=>{
    Availability.find()
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                 err.message || "Some error occured while retrieving availabilitys."
        });
    });

};
exports.findOne=(req,res) => {
    const id=req.params.id;
    Availability.findById(id)
    .then(data =>{
        if (!data)
        res.status(404).send({message:"Not found Availability withh id"+id});
        else res.send(data);
     })
     .catch(err =>{
         res.status(500).send({message:"Error retrieving Availabilitywith id"+id});
     });
};

exports.update=(req,res) =>{
    if(!req.body){
        return res.status(400).send({
            message:"Data to update can not be empty!"
        });
    }
    const id=req.params.id;
    Availability.findOneAndUpdate({AvailabilityId:id},req.body,{ useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:"Cannot update Availability with id=$(id).Maybe Availability was not found!"
        });}
        else res.send({message: "Availability was updated successfully."});
})
    .catch(err =>{
        res.status(500).send({message:"Error updating Availability with id="+id});

    });
};
exports.delete=(req,res)=>{
    const id=req.params.id;
    console.log(id)
   Availability.findOneAndDelete({AvailabilityId:id})
    .then(data =>{
        if(!data){
            res.status(404).send({
                message:`Cannot delete Availability with id=${id}.May be Availability was not found!`
            });
        }
        else{
            res.send({
                message:"Availability was deleted successfully!"
            });
        }
            
        })
        .catch(err =>{
            res.status(500).send({
            message:'Could not delete Availability with id='+id
        });
    });
};
exports.deleteAll=(req,res)=>{
    Availability.deleteMany()
    .then(data=>{
        res.send({message:`${data.deletedCount}Availability are deleted successfully!`});
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "some error occured while removing al availability."});
    });


};
