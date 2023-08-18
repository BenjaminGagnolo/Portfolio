import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/proyectos" element={<About />}/>
      <Route exact path="/contact" element={<Contacts />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
