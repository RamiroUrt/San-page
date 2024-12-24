import Home from "./layout/Home"
import Sessions from "./layout/pages/Sessions";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recomendaciones from "./layout/pages/Recomendations";
import Workshops from "./layout/pages/Workshops";
import AboutMe from "./layout/pages/AboutMe";

function App() {

  return (
    <>
     <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recomendaciones" element={<Recomendaciones />} />
          <Route path="/sesiones" element={<Sessions />} />  
          <Route path="/talleres" element={<Workshops />} />
          <Route path="/sobre-mi" element={<AboutMe />} />    
      </Routes>
    </Router>
    </>
  )
}

export default App
