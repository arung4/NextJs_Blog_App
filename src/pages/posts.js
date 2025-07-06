import React from 'react'
import FetchBlogs from '../lib/FetchBlogs'
import PostList from '@/components/PostList';


export async function getStaticProps(){
  // Get all blogs 
  const blogs = await FetchBlogs(); 

  return {
    props: { blogs},
    revalidate: 60,
  }
}
function BlogPage({blogs}) {
  return (
    <div className='p-3'>
      <h1 className='text-5xl font-bold text-center mt-12'>Blog App</h1> 
      <PostList blogs = {blogs}/>
    </div>
  )
}

export default BlogPage
