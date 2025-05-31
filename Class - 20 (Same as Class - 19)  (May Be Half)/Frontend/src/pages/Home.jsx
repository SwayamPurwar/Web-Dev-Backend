import { useEffect, useState } from "react";
import "./home.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:3000/get-post")
        .then(response =>{
            console.log(response.data);
            setPosts(response.data.post)
        })
    },[])

 const navigate = useNavigate(); 

  return (
   <main>
        <section className='home-section'>
            <header>
                <button 
                onClick={()=>{
                    navigate('/create-post')
                }}
                className="create-post-button">CreatePost</button>
            </header>
            <div className='posts'>
               {
                posts.map(post => {
                    
                    return (
                        <div className='post' >
                            <img src={post.imageURL} alt="" />
                            <p>{post.caption}</p>
                            <button>Like : {post.likeCount} </button>
                        </div>
                    )
                })
               }

            </div>
        </section>
   </main>
  )
}

export default Home
