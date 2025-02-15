import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="w-full ">
          <div className="w-3/4 mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-center
            md:items-center ">
            <div className="flex">
                <p className="text-gray-300">&copy; 2025 Joshua Kibwage</p>
            </div>
            <div className="flex gap-4">
                <a 
                    href="https://github.com/Joshuakibwage" 
                    target="_blank"
                    className="hover:-translate-y-1 flex items-center gap-4"
                >
                    <FaGithub size={30}/>
                    GitHub
                </a>
                <a 
                    href="www.linkedin.com/in/joshua-kibwage-b19556321" 
                    target="_blank"
                    className="hover:-translate-y-1 flex items-center gap-4"
                >
                    <FaLinkedin size={30}/>
                    LinkedIn
                </a>
            </div>
          </div>
        </footer>
    )
}

export default Footer;