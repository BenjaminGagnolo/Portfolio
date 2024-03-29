import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/home" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
