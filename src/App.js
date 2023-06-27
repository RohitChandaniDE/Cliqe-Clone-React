import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import Brands from "./pages/brands/Brands";
import Blog from "./pages/blog/Blog";
import BlogEN from "./pages/blogEN/BlogEN";


function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/login' element={<Login />} />
             <Route path='/signup' element={<Signup />} />
             <Route path='/features' element={<Features />} />
             <Route path='/pricing' element={<Pricing />} />
             <Route path='/brands' element={<Brands />} />
             <Route path='/blog-de' element={<Blog />} />
             <Route path='/blog-en' element={<BlogEN />} />
             

          </Routes>
        </Router>
        </div>
    );
}

export default App;
