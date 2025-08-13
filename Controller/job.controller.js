
import JobModel from "../Model/job.model.js";

const create= async(req,res)=>{
    console.log(req.body);
    await  JobModel.create(req.body);
    res.json({
        success:true,
        message:"Job posted"
    })
}

const  list=async(req,res)=>{
    console.log(req.body);
  const data= await JobModel.find();
  console.log(data);
    res.json({
        success:true,
        message:"Job List getted"
    })
}

// const edit= async(req,res)=>{
//     console.log(req.body);
//     const{_id,...updatedData}= req.body;
//     await JobModel.findByIdAndUpdate(_id,updatedData)
//     res.json({
//         success:true,
//         message:"Edited Successfully"
//     })
// }

const edit = async (req, res) => {
    console.log(req.body);
    const { _id, ...updatedData } = req.body; // match key name
    await JobModel.findByIdAndUpdate(_id, updatedData);
    res.json({
        success: true,
        message: "Edited Successfully"
    });
};


const deleteJob=async(req,res)=>{
     console.log(req.body);
    await JobModel.deleteOne(req.body);
    res.json({
        success:true,
        message:"Deleted Successfully"
    })
}

const jobController={
    create,
    list,
    edit,
    deleteJob
}

export default jobController;