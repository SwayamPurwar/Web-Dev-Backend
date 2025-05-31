import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  CreatePost  from "./pages/CreatePost";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1><Home /></h1>} />
        <Route path="/create-post" element={<CreatePost />}/>
      </Routes>
    </Router>
  )
}

export default App
