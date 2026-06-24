"use client";

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, {useState} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";



const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

const page = () => {

  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Select Category')
  const [location, setLocation] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try{
      const jobData = {
      title,
      description,
      category,
      location,
      contactName,
      contactEmail
    };

      const response = await axios.post(BACKEND_URL + '/api/job/add',jobData)
      toast.success("Job Added Successfully")

      

    }catch(error){
      console.error('Error submitting job request:', error);
      toast.error("Error")
    }




  }

  const router = useRouter();
  
   const handleClick = ()=>{
    router.push('/Booked');
   };
  

  return (

    
    <div className = 'py-5 px-5 md:12 lg:px-28'>

           {/* Header */}
           <div className='flex items-center justify-between bg-amber-100 w-full'>
    
             <Image src={assets.logo} width={180}  alt="Logo" className='border-1 border-black' />
              

             <h1 className='text-2xl font-bold text-black mr-4'> Enter Job That You Need</h1>
             <button onClick={handleClick}  type='submit' className = 'flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-200' >
                        Hired Jobs <Image src={assets.arrow} priority alt="Arrow" />
              </button>
             
           </div>


           {/* Form */}
           <div>
              <form  onSubmit={onSubmitHandler} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 mt-4">
                  Job Title *
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="e.g. Kitchen Sink Repair"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  rows="5"
                  placeholder="Describe the work you need done..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              {/* Category & Location */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Painting">Painting</option>
                    <option value="Joinery">Joinery</option>
                  </select>
                </div>

           <div>
             <label className="block text-sm font-semibold text-gray-700 mb-2">
               Location
             </label>
             <input
               type="text"
               placeholder="e.g. Glasgow"
               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
             />
           </div>
         </div>

         {/* Contact Details */}
         <div className="grid md:grid-cols-2 gap-6">
           <div>
             <label className="block text-sm font-semibold text-gray-700 mb-2">
               Contact Name
             </label>
             <input
               type="text"
               placeholder="Your Name"
               value={contactName}
               onChange={(e) => setContactName(e.target.value)}
               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
             />
           </div>

           <div>
             <label className="block text-sm font-semibold text-gray-700 mb-2">
               Contact Email
             </label>
             <input
                type="email"
                placeholder="example@email.com"
  
               value={contactEmail}
               onChange={(e) => setContactEmail(e.target.value)}
               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
           </div>
         </div>

           {/* Submit Button */}
           <button
             type="submit"
             className="w-full bg-gray-600 hover:bg-gray-800 text-white font-semibold py-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg mb-4">
             Submit Request
           </button>
         </form>


        </div>

           {/* Footer */}
           <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
                   <Image src={assets.logo} width={120} alt="Logo_Footer" />
                   <p className='text-sm text-white'> All right reserved. Copyright @QuickFix</p>
          </div>
            
    </div>

    
  )
}

export default page

