import { ExternalLink, Github } from "lucide-react";
import RandomProject from "./RandomProject";
import movieImage from "../assets/movie.png";
import diabetesImage from "../assets/diabetes.png";
import datastructuresImage from "../assets/datastructures.jpg";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Clone",
      category: "React",
      image: "https://i.ytimg.com/vi/7-nbYhAqG-I/maxresdefault.jpg",
      description:
        "A simple and responsive YouTube Clone built with modern web technologies.",
      link: "https://github.com/surycodes",
      github: "https://github.com/surycodes",
    },
    {
      title: "Diabetes Prediction System",
      category: "Machine Learning",
      image: diabetesImage,
      description:
        "A Streamlit app that predicts diabetes using Logistic Regression on the Pima Indians Dataset based on user-input health metrics.",
      link: "https://diabemate-bsy2p2np9dndkfnenn3nyw.streamlit.app/",
      github: "https://github.com/surycodes",
    },
    {
      title: "DSA Vault",
      category: "React",
      image: datastructuresImage,
      description:
        "A curated collection of Data Structures and Algorithms questions for efficient practice and interview preparation.",
      link: "https://dsa-vault-one.vercel.app/",
      github: "https://github.com/surycodes",
    },
    {
      title: "Movie Recommendation System",
      category: "Machine Learning",
      image: movieImage,
      description:
        "A content-based Movie Recommendation System built using Machine Learning techniques.",
      link: "https://movierecommender-main-dcfrlkfvzksg8wdfkd6s3j.streamlit.app/",
      github: "https://github.com/surycodes",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-black transition-colors"
    >
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center hover:text-portfolio-green transition-colors duration-300 dark:text-white">
            My Recent Projects
          </h2>

          <p className="section-subtitle text-center dark:text-gray-300">
            Here are some of my recent works. Each project solves a unique
            problem.
          </p>
        </div>

        <RandomProject />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover opacity-0 animate-slide-up group transition"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4 bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-portfolio-black dark:text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-black dark:text-white group-hover:text-portfolio-green transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-portfolio-gray dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-green hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm font-medium text-portfolio-gray dark:text-gray-300 hover:text-portfolio-black dark:hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
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