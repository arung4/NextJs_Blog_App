
import React from 'react';
import PostDetail from './PostDetail';
import Link from 'next/link';

function PostList({ blogs }) {

   if (!blogs || blogs.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No blogs available.</p>;
  }
  return (
    <div className="mt-20 flex-col gap-2.5">
      {blogs.map((blog) => (
        <div
          key={blog.article_id}
          className="border rounded-lg shadow-md p-4 cursor-pointer"
          
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{blog.title}</h2>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Author:</span> {blog.creator?.[0] || "Unknown"}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Date:</span> {blog.pubDate}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Category:</span> {blog.category?.join(", ")}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Source:</span> {blog.source_name || blog.source_id}
          </p>

          {/* Click link to check the post details  */}
      
          <Link 
          href={`/posts/${blog.article_id}`}
          className='border p-4 rounded-md shadow-md'
          >Details</Link>
        
        </div>
      ))}
      
    </div>
  );
}

export default PostList;
