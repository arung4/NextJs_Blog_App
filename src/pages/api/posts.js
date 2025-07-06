
const API_KEY = 'pub_c03afa6463d840b59ac4208aa1944215';
 export default async function FetchBlogs() {
  try {
    // write api call to fetch the blogs
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=lifestyle,science,technology,education&timezone=Asia/Kolkata`
    );
    if(!res.ok){
        throw new Error(`HTTP Error ! status : ${res.status}`)
    }
    
    // parse the response data 
    const blogs_data = await res.json();

    const blogs = blogs_data.results?.slice(0,10) || [];

    return blogs;

  } catch (error) {
    console.error("Error: ",error.message)
    return [];
  } 
}


