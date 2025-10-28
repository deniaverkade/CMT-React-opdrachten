import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import Contact from "./Pages/Contact";

function App() {

  return (
 <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
