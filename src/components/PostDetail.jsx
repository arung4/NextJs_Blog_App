import React from 'react'
import fallbackImage from "../../public/fallback.png" ;

function PostDetail({blog}) {
  return (
    <div className=' mt-10 bg-red-300 p-9 border rounded-2xl text-black'>
      <h1 className='text-3xl font-bold'>{blog.title}</h1>
      <div className='flex gap-9 mt-3 mb-3'>
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
      <div>
       {blog.image_url && (
         <img src={blog.image_url|| fallbackImage } alt="Blog Image" className="border rounded-2xl" />
      )}
      </div>
      {/* Blog Description */}
      <p className='mt-3 text-justify'>{blog.description || ""}</p>
    </div>
  )
}

export default PostDetail
