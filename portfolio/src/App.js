import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/project";
import Contact from "./pages/contact";



function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="main" element={<Main/>}/>
        <Route path="about" element={<About/>}/> 
          <Route path="skills" element={<Skills/>}/> 
          <Route path="project" element={<Project/>}/>
          <Route path="contact" element={<Contact/>}/>         
      </Route>
   </Routes>
   
   </BrowserRouter>
   </>
  );
}
// ex) localhost:3000/menu/30 -> menuCode = 30 을 하겠다
export default App;
