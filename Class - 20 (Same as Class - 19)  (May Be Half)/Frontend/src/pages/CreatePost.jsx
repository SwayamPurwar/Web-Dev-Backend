import "./createpost.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    const imageUrl = document.getElementById("image-url").value;
    const caption = document.getElementById("caption").value;

    axios.post("http://localhost:3000/create-post",{
      imageUrl,
      caption
    })
   .then(response =>{
      console.log(response.data);
      navigate('/')
   })
  }
  return (
    <main>
        <section className='create-post'>

            <form onSubmit={handleSubmit} action="">

                <input type='text' placeholder='enter image url' 
                id="image-url" />

                <input type='text' placeholder='enter post caption'
                id="caption"  />

                <button className='create-post-button'>Create Post</button>

            </form>

        </section>
    </main>
  )
}

export default CreatePost
