 

const Projects = () => {
  return (
    <section 
    id="projects"
    className="min-h-screen flex items-center justify-center py-20 "
    >
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-[#9775fa] to-[#40c057] 
                bg-clip-text text-transparent"
            >
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="">
                    <h3>Travel Planner</h3>
                    <p>
                        Scalable cloud infrastructure management with real time monitoring and automated scaling
                    </p>
                    <div>
                        {["React", "Tailwind", ]}
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Projects