import './App.css';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import AboutApp from './Components/Pages/AboutApp'
import AboutAuthor from './Components/Pages/AboutAuthor'
import NotFound from './Components/Pages/notFound'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/About/About-App" element={<AboutApp />} />
          <Route path="/About/About-Author" element={<AboutAuthor />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
