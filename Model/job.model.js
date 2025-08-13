import mongoose from 'mongoose';

const Schema= new mongoose.Schema(
    {
    Title:{
        type:String,
        required:true
    },

    Company:{
        type:String,
        required:true
    },
    Sallery:{
        type:Number,
        required:true
    },
    Skills:{
        type:[String],
        default:["Management"]
    }

}
 );

 const JobModel= mongoose.model("jobs",Schema);

 export default JobModel;
