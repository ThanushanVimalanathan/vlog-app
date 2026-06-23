import React, {useState} from 'react'
import { blog_data } from '@/Assets/assets'
import BlogItem from './BlogItem'

const BlogList = () => {


    const [menu,setMenu] = useState("All")

  return (
    <div>
        <div className = 'flex justify-center gap-6 my-10'>
            <button  onClick={() => setMenu("All")}  className ={menu ==='All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>All</button>
            <button  onClick={() => setMenu("Plumbing")} className ={menu ==='Plumbing' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Plumbing</button>
            <button onClick={() => setMenu("Electrical")} className ={menu ==='Electrical' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Electrical</button>
            <button onClick={() => setMenu("Painting")} className ={menu ==='Painting' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Painting</button>
            <button onClick={() => setMenu("Joinery")} className ={menu ==='Joinery' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Joinery</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=>menu === 'All' ?true: item.category === menu ).map((item, index)=>{
                return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category} />
            })}
        </div>
      
    </div>
  )
}

export default BlogList
