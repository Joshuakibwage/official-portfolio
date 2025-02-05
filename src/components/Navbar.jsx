import { useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({nav, setNav}) => {

    useEffect(() => {
        document.body.style.overflow = nav ? "hidden" : "";
    }, [nav])
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b 
    border-white/10 shadow-lg  ">

        <div className="max-w-5xl mx-auto px-4 ">
            <div className="flex items-center h-16 justify-between">

                <a href="#home" className="font-mono text-xl font-bold ">
                    josh.dev
                </a>

                <div className=" h-5 relative cursor-pointer z-40 md:hidden " 
                onClick={() => setNav((prev) => !prev)}
                >
                    <CiMenuBurger size={30}/>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        Home
                    </a>

                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                        About
                    </a>

                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                        Projects
                    </a>

                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar