import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  CreatePost  from "./pages/CreatePost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1><Home /></h1>} />
        <Route path="/create-post" element={<h1><CreatePost /></h1>}/>
      </Routes>
    </Router>
  )
}

export default App
