 

const Home = () => {
  return (
    <section 
        id="home" 
        className="min-h-screen flex justify-center items-center relative "
    >
        <div className="tex-center z-10 px-4 ">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right bg-gradient-to-r from-[#40c057]
            to-[#9775fa] bg-clip-text text-transparent"
            >
                Hi, I'm Joshua Kibwage
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                A passionate front-end developer with a keen eye for design and a strong foundation in HTML, 
                CSS, JavaScript, and React. Let's build something amazing together!
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-[#9775fa] text-white py-3 px-6 rounded font-medium 
                relative transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_#9775fa]">
                    View Projects
                </a>

                <a href="#projects" className="border border-[#40c057] py-3 px-6 rounded font-medium 
                text-[#40c057] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2b4730] 
                hover:shadow-[0_0_15px_#40c057]"
                >
                    View Projects
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home