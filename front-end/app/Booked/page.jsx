"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";



const page = () => {
  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

  const [orderData, setOrderData] = useState([]);
  

  const loadOrderData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/job/list`);

      console.log("API RESPONSE:", response.data);

      if (response.data.success) {
        const jobs = response.data.jobs || [];

        // flatten jobs directly (no items inside your response)
        const formattedJobs = jobs.map((job) => ({
          ...job,
        }));

        setOrderData(formattedJobs.reverse());
      }
    } catch (error) {
      console.log("Error loading jobs:", error.message);
      toast.error("Error Loading Jobs")
    }
  };


  const statusHandler = async (event, jobId) => {
    try {
      const response = await axios.put(BACKEND_URL + '/api/job/modify', {jobId, status:event.target.value})
      if(response.data.success){
        await loadOrderData()
      }
      toast.success('Status Changed')
      
    } catch (error) {
      console.log(error)
      toast.error("Error Loading Jobs")
      
    }
  }

  const deleteJob = async (jobId) => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/job/remove`,{data: { jobId }});
      if(response.data.success){
        await loadOrderData()
        toast.success("Job Deleted")
      }
      
    } catch (error) {
      console.log(error)
      toast.error("Error of this Process")
    }
  }

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">All Jobs</h1>

    <div>
      <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Location</th>
            <th className="px-4 py-3 text-left">Contact Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">   </th>
            
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {orderData.map((job) => (
            <tr key={job._id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3">{job.title}</td>
              <td className="px-4 py-3">{job.description}</td>
              <td className="px-4 py-3">{job.category}</td>
              <td className="px-4 py-3">{job.location}</td>
              <td className="px-4 py-3">{job.contactName}</td>
              <td className="px-4 py-3">{job.contactEmail}</td>
              

              <td className="px-4 py-3">
                <span>

                  <select
                    
                    onChange={(event) => statusHandler(event,job._id)}
                    value={job.status}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">

                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                    
                  </select>
                </span>
                
              </td>
              <td className="px-4 py-3"><h1 className="cursor-pointer" onClick={()=>deleteJob(job._id)}>X</h1></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  );
};

export default page;