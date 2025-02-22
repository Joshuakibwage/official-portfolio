import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="w-full ">
          <div className="container mx-auto flex flex-col items-center space-y-6 py-8 md:flex-row 
          md:justify-between md:items-center border-t border-gray-800">

            <div className="flex gap-4">
                <a 
                    href="https://github.com/Joshuakibwage" 
                    target="_blank"
                    className="hover:-translate-y-1 delay-200 transition-all ease-in-out hover:text-gray-500"
                >
                    <FaGithub size={26}/>
                </a>
                <a 
                    href="www.linkedin.com/in/joshua-kibwage-b19556321" 
                    target="_blank"
                    className="hover:-translate-y-1 delay-200 transition-all ease-in-out hover:text-gray-500"
                >
                    <FaLinkedin size={26}/>
                </a>
            </div>

            
            <div>
                <p className="text-gray-300">
                    &copy; {new Date().getFullYear()} Joshua Kibwage. All rights reserved.
                </p>
            </div>
            
            
          </div>
        </footer>
    )
}

export default Footer;