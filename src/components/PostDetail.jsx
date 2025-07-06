import React from 'react'
import fallbackImage from "../../public/fallback.png" ;

function PostDetail({blog}) {
  return (
    <div className=' mt-10 bg-white p-8 border rounded-2xl shadow-md max-w-4xl mx-auto text-black'>
     
       {/* Blog title  */}
      <h1 className='text-3xl font-bold mb-4 text-blue-700'>{blog.title}</h1>

       {/* Meta info  */}
      <div className='flex flex-wrap justify-between gap-6 text-md mb-6 text-gray-600'>
          <div>
            <p>Author: <span>{blog.creator?.[0] || "Unknown"}</span></p>
            <p>Source: <span>{blog.source_name || blog.source_id}</span></p>
          </div>
          <div>
            <p>Date: <span>{new Date(blog.pubDate).toLocaleString()}</span></p>
            <p>Category: <span>{blog.category.join(",")}</span></p>
          </div>
      </div>

      {/* Image container  */}
      <div className='w-full mb-6'>
       {blog.image_url && (
         <img src={blog.image_url|| fallbackImage } 
         alt="Blog Image" 
         width={800}
         height={400}
         className="border rounded-2xl h-auto w-full object-cover" />
      )}
      </div>

      {/* Blog Description */}
      <h3 className='text-gray-600 font-bold text-xl'>Description:</h3>
      <p className='mt-2 text-lg text-gray-800 text-justify'>{blog.description || "No description available"}</p>
    </div>
  )
}

export default PostDetail
