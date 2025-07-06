import PostDetail from "@/components/PostDetail";
import FetchBlogs from "@/lib/FetchBlogs";


export async function getServerSideProps({params}){
    const blogs = await FetchBlogs();

    const blog = blogs.find((b) => b.article_id === params.id);

    if(!blog){
        return {
            props: { }
        }
    }
    return {
        props: { 
            blog,
        }
    }
}

function ShowPostDetails({blog}){
   
     if(!blog){
        return (
            <p>Blog details not availble</p>
        )
     }

    return(
        <div className="p-3">
         <h1 className='text-5xl font-bold text-center mt-12'>Blog App</h1> 
         <PostDetail blog = {blog}/>
        </div>
    )
}

export default ShowPostDetails;