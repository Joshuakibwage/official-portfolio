
import { MdCancelPresentation } from "react-icons/md";

const MobileMenu = ({ nav, setNav }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-center
        justify-center transition-all duration-300 ease-in-out ${
        nav
        ? "h-screen opacity-100 pointer-events-auto"
        : "h-0 opacity-0 pointer-events-none"
    }`}
    >
      <button
        onClick={() => setNav(false)}
        className="absolute top-6 right-6 text-white cursor-pointer md:hidden"
        aria-label="Close Menu"
      >
        <MdCancelPresentation size={30}/>
      </button>

      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
            ${
                nav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        onClick={() => setNav(false)}
      >
        Home
      </a>

      <a
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
            ${
                nav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        onClick={() => setNav(false)}
      >
        About
      </a>

      <a
        href="#projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
            ${
                nav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        onClick={() => setNav(false)}
      >
        Projects
      </a>

      <a
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
            ${
                nav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        onClick={() => setNav(false)}
      >
        Contact
      </a>
    </nav>
  );
};

export default MobileMenu;
