

const About = () => {

    const frontendSkills = [
        {name: "JavaScript"},
        {name: "React"},
        {name: "HTML"},
        {name: "CSS3"},
       { name: "TailwindCSS"},
       {name: "Git"}
    ];
 

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-[#9775fa] to-[#40c057] 
                bg-clip-text text-transparent text-center"
                >
                    About Me
                </h2>

                <div className="rounded-xl glass p-8 border-white/10 border hover:translate-y-1 
                transition-all hover:border-[#9775fa] hover:shadow-[0_0_15px_#9775fa] text-center"
                >
                    <p className="text-gray-300 mb-6 text-left">
                        My journey into web development started with a deep curiosity about how websites 
                        work. After months of dedicated learning and hands-on practice, I built a strong
                         foundation in front-end technologies and UI/UX best practices. Now, I focus on 
                         crafting clean, maintainable code and seamless user experiences.
                    </p>

                    <div className="">

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all "
                        >
                            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#9775fa] 
                            to-[#40c057] bg-clip-text text-transparent"
                            >
                                Front-End Skills
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {frontendSkills.map((tech) => ( 
                                    <span key={tech} className="bg-green-500/10 text-[#40c057] py-1
                                    px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_0_15px_#40c057]
                                    transition "
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <div className="p-6  rounded-xl border border-white/10 hover:translate-y-1 transition-all
                     hover:border-[#9775fa] hover:shadow-[0_0_15px_#9775fa]">
                        <h3 className="text-center font-bold bg-gradient-to-r from-[#9775fa] to-[#40c057] 
                                        bg-clip-text text-transparent mb-3 text-xl"
                        >
                            What I Do <span>🛠️</span>
                        </h3>

                        <ol className="list-disc text-gray-300">
                            <li>Build responsive and dynamic web applications</li>
                            <li>Work with React, Tailwind CSS, and Zustand for state management</li>
                            <li>Optimize UI/UX for performance and accessibility</li>
                        </ol>
                    </div>

                    <div className="p-6  rounded-xl border border-white/10 hover:translate-y-1 transition-all
                     hover:border-[#9775fa] hover:shadow-[0_0_15px_#9775fa]">
                        <h3 className="text-center font-bold bg-gradient-to-r from-[#9775fa] to-[#40c057] 
                                        bg-clip-text text-transparent mb-3 text-xl"
                        >
                            What Drives Me <span>💡</span>
                        </h3>
                        <p className="text-gray-300">
                        I love problem-solving, whether it’s debugging a tricky component or fine-tuning a 
                        layout for pixel-perfect precision. Seeing a design come to life through code is what 
                        excites me the most.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;