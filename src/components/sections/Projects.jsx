import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import project1 from "../../assets/projectsImage.png"
import project2 from "../../assets/project2-image.png"
import project3 from "../../assets/project-3-image.png"

const Projects = () => {

    const myProjects = [
        {
            img: project1,
            title: "Travel Planner",
            description: "Travel planner project",
            links: {
                site: "https://travel-planner-ebon.vercel.app/",
                github: "https://github.com/Joshuakibwage/travel-planner"
            },
        },
        {
            img: project2,
            title: "Todo List",
            description: "Todo list project",
            links: {
                site: "https://mytodolist-eosin.vercel.app/",
                github: "https://github.com/Joshuakibwage/react-todo"
            },
        },{
            img: project3,
            title: "News Homepage",
            description: "Newsreader platform",
            links: {
                site: "https://news-homepage-tau-ten.vercel.app/",
                github: "https://github.com/Joshuakibwage/news-homepage"
            }
        }
    ]
    
  return (
    <section 
    id="projects"
    className="min-h-screen flex items-center justify-center py-20 "
    >
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-[#9775fa] to-[#40c057] 
                bg-clip-text text-transparent text-center"
            >
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             
                {myProjects.map((project, index) => (
                    <div 
                    key={index}
                    className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 
                    hover:border-[#9775fa] hover:shadow-[0_0_15px_#9775fa]"
                     >

                        <div className="space-y-2">
                            <div className="mb-4">
                                <a href={project.links.site}>
                                    <img 
                                        src={project.img} 
                                        alt={project.title} 
                                    />
                                </a>
                                <h3 className="font-bold mt-2">{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                            {["React", "Tailwind", ].map((tech) => (
                                <span 
                                key={tech}
                                className="bg-green-500/10 text-[#40c057] py-1
                                px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_0_15px_#40c057]
                                transition mx-3"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <a
                            className="hover:translate-y-1 hover:text-gray-400" 
                            href={project.links.github}
                            >
                             <FaGithubSquare size={30} />
                            </a>
                            <a 
                                className="flex items-center gap-1 hover:translate-y-1 hover:text-[#9775fa]"
                                href={project.links.site}
                                target="_blank"
                            >
                                View Project
                                <MdOutlineArrowRightAlt />
                            </a>
                        </div>
                    </div>
                    ))}
                   
                

            </div>

        </div>
    </section>
  )
}

export default Projects