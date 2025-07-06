
import React from 'react';
import PostDetail from './PostDetail';
import Link from 'next/link';

function PostList({ blogs }) {

   if (!blogs || blogs.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No blogs available.</p>;
  }
  return (
     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
      {blogs.map((blog) => (
        <div
          key={blog.article_id}
          className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-2 ">{blog.title}</h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Author:</span> {blog.creator?.[0] || 'Unknown'}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Date:</span> {new Date(blog.pubDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Category:</span> {blog.category?.join(', ')}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Source:</span> {blog.source_name || blog.source_id}
            </p>
          </div>

          {/* Details Button */}
          <Link
            href={`/posts/${blog.article_id}`}
            className="mt-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
