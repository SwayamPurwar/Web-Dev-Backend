import "./home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {

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
               
                <div className='post' >
                    <img src="https://images.unsplash.com/photo-1746980885762-d31b3ee71d4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <button>Like : 11 </button>

                </div>
                

            </div>
        </section>
   </main>
  )
}

export default Home
