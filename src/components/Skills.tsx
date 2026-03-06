const Skills = () => {

  const programmingLanguages = [
    { name: "C", image: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
    { name: "C++", image: "https://cdn.worldvectorlogo.com/logos/c.svg" },
    { name: "Java", image: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    { name: "JavaScript", image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "Python", image: "https://cdn.worldvectorlogo.com/logos/python-5.svg" }
  ];

  const machineLearningTools = [
    { name: "NumPy", image: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg" },
    { name: "Pandas", image: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
    { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "TensorFlow", image: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
    { name: "Matplotlib", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },

  ];

  const frontendTools = [
    { name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "TypeScript", image: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "HTML", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "Figma", image: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" }
  ];

  const backendTools = [
    { name: "Node.js", image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express", image: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "MongoDB", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" }
  ];

  const developmentTools = [
    { name: "GitHub", image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "VS Code", image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
    { name: "Google Colab", image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" }
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black transition-colors"
    >
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center hover:text-portfolio-green transition-colors duration-300 dark:text-white">
            Skills & Tools
          </h2>

          <p className="section-subtitle text-center dark:text-gray-300">
            My technical skills and the tools I use to build intelligent solutions
          </p>
        </div>

        <div className="space-y-16">

          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-black dark:text-white">
              Programming Languages
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {programmingLanguages.map((lang, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-md bg-white dark:bg-gray-800 hover:bg-portfolio-green/10 transition transform hover:scale-110 group"
                >
                  <img src={lang.image} alt={lang.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-medium text-portfolio-gray dark:text-gray-300 group-hover:text-portfolio-green">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Learning */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-black dark:text-white">
              Machine Learning Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {machineLearningTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-md bg-white dark:bg-gray-800 hover:bg-portfolio-green/10 transition transform hover:scale-110 group"
                >
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-medium text-portfolio-gray dark:text-gray-300 group-hover:text-portfolio-green">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-black dark:text-white">
              Frontend
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {frontendTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-md bg-white dark:bg-gray-800 hover:bg-portfolio-green/10 transition transform hover:scale-110 group"
                >
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-medium text-portfolio-gray dark:text-gray-300 group-hover:text-portfolio-green">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-black dark:text-white">
              Backend
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {backendTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-md bg-white dark:bg-gray-800 hover:bg-portfolio-green/10 transition transform hover:scale-110 group"
                >
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-medium text-portfolio-gray dark:text-gray-300 group-hover:text-portfolio-green">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-black dark:text-white">
              Development Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {developmentTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-md bg-white dark:bg-gray-800 hover:bg-portfolio-green/10 transition transform hover:scale-110 group"
                >
                  <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-medium text-portfolio-gray dark:text-gray-300 group-hover:text-portfolio-green">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;