
import jobModel from "../models/jobModel.js";

// function for add job request
const addJob = async (req, res) => {
    try{
        const {title,description,category,location,contactName,contactEmail,status} = req.body;

        const jobData = {
            title,
            description,
            category,
            location,
            contactName,
            contactEmail,
            status:status || "Open",
            createdAt: Date.now()
        }

        console.log(jobData)
        const job = new jobModel(jobData);

        await job.save();
        res.json({success:true, message:"Job added successfully", job})

    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})

    }

}


// function for add list request
const listJobs = async (req, res) => {
    try {
        const jobs = await jobModel.find({})
        res.json({success:true, jobs})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
    
}

// function for remove job request
const removeJob = async (req, res) => {
    try{
        await jobModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Job removed successfully"})

    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
    
}

// function for single job request
const singleJob = async (req, res) => {
    try{
        const {jobId} = req.body;
        const job = await jobModel.findById(jobId);
        res.json({success:true, job})

    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
    
}

// function for modify job request
const modifyJob = async (req, res) => {
    try{
        const {jobId, ...updatedData} = req.body;
        const job = await jobModel.findByIdAndUpdate(jobId, updatedData, {new:true});
        res.json({success:true, job})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export { addJob, listJobs, removeJob, singleJob, modifyJob }