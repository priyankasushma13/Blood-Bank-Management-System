const db=require("../models");
const Donar=db.donars;
exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const donar=new Donar({
        DonarId:req.body.DonarId,
        DonarName:req.body.DonarName,
        BloodGroup:req.body.BloodGroup,
        Dob:req.body.Dob,
        Gender:req.body.Gender,
        Age:req.body.Age,
        City:req.body.City,
        State:req.body.State,
        phoneNumber:req.body.phonenumber,
        Email:req.body.Email,
        LastDonatedDate:req.body.LastDonatedDate,
        BloodAmount:req.body.BloodAmount
           });
    donar.save(donar)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating the Donar."
    });
});
};
exports.findAll=(req,res)=>{
    Donar.find()
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                 err.message || "Some error occured while retrieving donars."
        });
    });

};
exports.findMultiple=(req,res)=>{
    let field=req.params.field;
    let data=req.params.data;
    console.log(field,data);
    if(field=="DonarId"){
    Donar.find({DonarId:data})
    .then(data=>{
        res.send(data);
        console.log(data);
    })
    .catch(err=>{
        res.status(500).send({
           message:err.message||"some error occured while retrieving donars" 
        });
    })
    }
    else if(field=="DonarName"){
        Donar.find({DonarName:data})
    .then(data=>{
        res.send(data);
        console.log(data);
    })
    .catch(err=>{
        res.status(500).send({
           message:err.message||"some error occured while retrieving donars" 
        });
    })
    }
    else if(field=="BloodGroup"){
        Donar.find({BloodGroup:data})
        .then(data=>{
            res.send(data);
            console.log(data);
        })
        .catch(err=>{
            res.status(500).send({
               message:err.message||"some error occured while retrieving donars" 
            });
        })
        }
    else if(field=="LastDonatedDate"){
            Donar.find({LastDonatedDate:data})
            .then(data=>{
                res.send(data);
                console.log(data);
            })
            .catch(err=>{
                res.status(500).send({
                   message:err.message||"some error occured while retrieving donars" 
                });
            })
            }
    else if(field=="City"){
                Donar.find({City:data})
                .then(data=>{
                    res.send(data);
                    console.log(data);
                })
                .catch(err=>{
                    res.status(500).send({
                       message:err.message||"some error occured while retrieving donars" 
                    });
                })
                }
};

exports.findOne=(req,res) => {
    const id=req.params.id;
    Donar.findById(id)
    .then(data =>{
        if (!data)
        res.status(404).send({message:"Not found Donar withh id"+id});
        else res.send(data);
     })
     .catch(err =>{
         res.status(500).send({message:"Error retrieving Donarwith id"+id});
     });
};

exports.update=(req,res) =>{
    if(!req.body){
        return res.status(400).send({
            message:"Data to update can not be empty!"
        });
    }
    const id=req.params.id;
    Donar.findOneAndUpdate({DonarId:id},req.body,{ useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:"Cannot update Donar with id=$(id).Maybe Donar was not found!"
        });}
        else res.send({message: "Donar was updated successfully."});
})
    .catch(err =>{
        res.status(500).send({message:"Error updating Donar with id="+id});

    });
};
exports.delete=(req,res)=>{
    const id=req.params.id;
    console.log(id)
   Donar.findOneAndDelete({DonarId:id})
    .then(data =>{
        if(!data){
            res.status(404).send({
                message:`Cannot delete Donar with id=${id}.May be Donar was not found!`
            });
        }
        else{
            res.send({
                message:"Donar was deleted successfully!"
            });
        }
            
        })
        .catch(err =>{
            res.status(500).send({
            message:'Could not delete Donar with id='+id
        });
    });
};
exports.deleteAll=(req,res)=>{
    Donar.deleteMany()
    .then(data=>{
        res.send({message:`${data.deletedCount}Donar are deleted successfully!`});
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "some error occured while removing al donar."});
    });


};
