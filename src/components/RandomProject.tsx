
import { useState } from "react";
import { ExternalLink, Github, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  github: string;
}

const RandomProject = () => {
  const projects = [
    {
      title: "youtube-clone",
      category: "React",
      image: "https://i.ytimg.com/vi/7-nbYhAqG-I/maxresdefault.jpg",
      description: "A simple and responsive YouTube Clone built with modern web technologies.",
      link: "#",
      github: "https://github.com/surycodes"
    },
    {
      title: "To-Do List Application",
      category: "Web App",
      image: "https://i.ibb.co/HfYLvXTX/1.jpg",
      description: "A responsive React-based To-Do List app with a clean, professional UI, featuring task addition, deletion, and reordering functionality..",
      link: "#",
      github: "https://github.com/surycodes"
    },
    {
      title: "DSA Vault",
      category: "React",
      image: "public/lovable-uploads/cyber-security-concept-digital-art.jpg",
      description: "**DSA Vault** is a curated collection of Data Structures and Algorithms questions for efficient practice and interview preparation..",
      link: "#",
      github: "https://github.com/surycodes"
    },
    {
      title: "E-commerce Website",
      category: "Full Stack",
      image: "",
      description: "A fully responsive e-commerce platform with payment integration.",
      link: "#",
      github: "https://github.com/surycodes"
    }
  ];

  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomProject = () => {
    setIsAnimating(true);
    
    // Get a random project that's different from the current one
    let newProject;
    do {
      newProject = projects[Math.floor(Math.random() * projects.length)];
    } while (currentProject && newProject.title === currentProject.title && projects.length > 1);
    
    setTimeout(() => {
      setCurrentProject(newProject);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <Button 
        onClick={getRandomProject} 
        className="mb-8 bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-yellow/90 flex items-center gap-2 transform transition hover:scale-105 active:scale-95"
      >
        <Shuffle size={18} />
        Surprise Me
      </Button>
      
      {currentProject && (
        <div 
          className={`bg-white rounded-xl overflow-hidden shadow-lg max-w-md w-full ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          } transition-all duration-500`}
        >
          <div className="h-64 overflow-hidden">
            <img 
              src={currentProject.image} 
              alt={currentProject.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-portfolio-black">
              {currentProject.category}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-portfolio-black">{currentProject.title}</h3>
            <p className="text-portfolio-gray mb-4">{currentProject.description}</p>
            
            <div className="flex gap-3">
              <a 
                href={currentProject.link} 
                className="flex items-center gap-1 text-sm font-medium text-portfolio-green hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Preview
              </a>
              <a 
                href={currentProject.github} 
                className="flex items-center gap-1 text-sm font-medium text-portfolio-gray hover:text-portfolio-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomProject;
