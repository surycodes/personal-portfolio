
import { ExternalLink, Github } from "lucide-react";
import RandomProject from "./RandomProject";

const Projects = () => {
  const projects = [
    {
      title: "youtube-clone",
      category: "React",
      image: "https://i.ytimg.com/vi/7-nbYhAqG-I/maxresdefault.jpg",
      description: "A simple and responsive YouTube Clone built with modern web technologies.",
      link: "https://youtube-clone-flax-ten-37.vercel.app/",
      github: "https://github.com/surycodes"
    },
    {
      title: "DiabetesPredictionSystem",
      category: "Web App",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEvuXdhrlCpiA/feedshare-shrink_800/feedshare-shrink_800/0/1721559130671?e=2147483647&v=beta&t=xtpI-wMMPeb9BAz2nJ0ANwwDc52N0RNL4F_dBHFlu48",
      description: "DiabetesPredictionSystem is a Streamlit app that predicts Diabetes using Logistic Regression on the Pima Indians Dataset based on user-input health metrics.",
      link: "https://diabemate-bsy2p2np9dndkfnenn3nyw.streamlit.app/",
      github: "https://github.com/surycodes"
    },
    {
      title: "DSA Vault",
      category: "React",
      image: "https://pyq-nest.vercel.app/image/dsa-course.jpg",
      description: "**DSA Vault** is a curated collection of Data Structures and Algorithms questions for efficient practice and interview preparation..",
      link: "https://dsa-vault-one.vercel.app/",
      github: "https://github.com/surycodes"
    },
    {
      title: "E-commerce Website",
      category: "Full Stack",
      image: "https://www.figma.com/community/resource/780f2089-51f3-4bc4-8d94-834c8e9042fb/thumbnail",
      description: "A fully responsive e-commerce platform with payment integration.",
      link: "https://github.com/surycodes",
      github: "https://github.com/surycodes"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center hover:text-portfolio-green transition-colors duration-300">
            My Recent Projects
          </h2>
          <p className="section-subtitle text-center">
            Here are some of my recent works. Each project is unique and tackles different challenges.
          </p>
        </div>
        
        <RandomProject />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md card-hover opacity-0 animate-slide-up group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-portfolio-black">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-black group-hover:text-portfolio-green transition-colors duration-300">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-green hover:underline group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="transition-transform group-hover:scale-110" />
                    Live Preview
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-gray hover:text-portfolio-black group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="transition-transform group-hover:scale-110" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
