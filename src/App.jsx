import { LoadingScreen } from "./components/LoadingScreen";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import "./index.css";
import { useState } from "react";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

  
 
 const App = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  const [nav, setNav] = useState(false);

   return (
     <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}

        <div className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
        >
          <Navbar nav={nav} setNav={setNav} />
          <MobileMenu nav={nav} setNav={setNav}/>
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
     </>
   )
 }
 
 export default App