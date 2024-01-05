const db=require("../models");
const Patient=db.patients;
exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const patient=new Patient({
        PatientId:req.body.PatientId,
        PatientName:req.body.PatientName,
        BloodGroup:req.body.BloodGroup,
        Dob:req.body.Dob,
        Gender:req.body.Gender,
        Age:req.body.Age,
        City:req.body.City,
        State:req.body.State,
        phoneNumber:req.body.phonenumber,
        Email:req.body.Email,
        Reason:req.body.Reason,
        BloodAmount:req.body.BloodAmount
        
           });
    patient.save(patient)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating the Patient."
    });
});
};
exports.findAll=(req,res)=>{
    const PatientId=req.query.PatientId;
    var condition=PatientId ? {PatientId:{$regex: new RegExp(PatientId),$options:"i"}}:{};
     Patient.find(condition)
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                 err.message || "Some error occured while retrieving patients."
        });
    });

};

exports.findMultiple=(req,res)=>{
    let field=req.params.field;
    let data=req.params.data;
    console.log(field,data);
    if(field=="PatientId"){
    Patient.find({PatientId:data})
    .then(data=>{
        res.send(data);
        console.log(data);
    })
    .catch(err=>{
        res.status(500).send({
           message:err.message||"some error occured while retrieving patients" 
        });
    })
    }
    else if(field=="PatientName"){
        Patient.find({PatientName:data})
    .then(data=>{
        res.send(data);
        console.log(data);
    })
    .catch(err=>{
        res.status(500).send({
           message:err.message||"some error occured while retrieving patients" 
        });
    })
    }
    else if(field=="BloodGroup"){
        Patient.find({BloodGroup:data})
        .then(data=>{
            res.send(data);
            console.log(data);
        })
        .catch(err=>{
            res.status(500).send({
               message:err.message||"some error occured while retrieving patients" 
            });
        })
        }
    else if(field=="Reason"){
            Patient.find({Reason:data})
            .then(data=>{
                res.send(data);
                console.log(data);
            })
            .catch(err=>{
                res.status(500).send({
                   message:err.message||"some error occured while retrieving patients" 
                });
            })
            }
    else if(field=="City"){
                Patient.find({City:data})
                .then(data=>{
                    res.send(data);
                    console.log(data);
                })
                .catch(err=>{
                    res.status(500).send({
                       message:err.message||"some error occured while retrieving patients" 
                    });
                })
                }
};

exports.findOne=(req,res) => {
    const id=req.params.id;
    Patient.findById(id)
    .then(data =>{
        if (!data)
        res.status(404).send({message:"Not found Patient withh id"+id});
        else res.send(data);
     })
     .catch(err =>{
         res.status(500).send({message:"Error retrieving Patientwith id"+id});
     });
};

exports.update=(req,res) =>{
    if(!req.body){
        return res.status(400).send({
            message:"Data to update can not be empty!"
        });
    }
    const id=req.params.id;
    Patient.findOneAndUpdate({PatientId:id},req.body,{ useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:"Cannot update Patient with id=$(id).Maybe Patient was not found!"
        });}
        else res.send({message: "Patient was updated successfully."});
})
    .catch(err =>{
        res.status(500).send({message:"Error updating Patient with id="+id});

    });
};
exports.delete=(req,res)=>{
    const id=req.params.id;
    Patient.findOneAndDelete({PatientId:id})
    .then(data =>{
        if(!data){
            res.status(404).send({
                message:`Cannot delete Patient with id=${id}.May be Patient was not found!`
            });
        }
        else{
            res.send({
                message:"Patient was deleted successfully!"
            });
        }
            
        })
        .catch(err =>{
            res.status(500).send({
            message:'Could not delete Patient with id='+id
        });
    });
};
exports.deleteAll=(req,res)=>{
    Patient.deleteMany()
    .then(data=>{
        res.send({message:`${data.deletedCount}Patient are deleted successfully!`});
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "some error occured while removing al Patient."});
    });


};
