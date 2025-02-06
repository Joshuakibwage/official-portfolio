

const About = () => {

    const frontendSkills = [
        {name: "JavaScript"},
        {name: "React"},
        {name: "HTML"},
        {name: "CSS3"},
       { name: "TailwindCSS"}
    ];
 

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-[#9775fa] to-[#40c057] 
                bg-clip-text text-transparent"
                >
                    About Me
                </h2>

                <div className="rounded-xl glass p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer in building scalable web applications and creating
                         innovative solutions.
                    </p>

                    <div className="">

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-6">Front-End</h3>
                            <div className="flex flex-wrap gap-4">
                                {frontendSkills.map((tech) => ( 
                                    <span key={tech} className="bg-green-500/10 text-[#40c057] py-1
                                    px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_0_15px_#40c057]
                                    transition"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <div className="p-6  rounded-xl border border-white/10 hover:translate-y-1 transition-all">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;