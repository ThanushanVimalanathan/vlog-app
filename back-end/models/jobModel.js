import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    location:{type:String, required:true},
    contactName:{type:String, required:true},
    contactEmail:{type:String, required:true,validate: {
        validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
    }},
    status:{type:String, enum:["Open", "In Progress","Closed"], default:"Open"},
    createdAt:{type:Date, default:Date.now}
});

const jobModel = mongoose.models.jobRequests || mongoose.model("jobRequests", jobSchema);

export default jobModel;