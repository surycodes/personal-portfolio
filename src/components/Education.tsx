import TimelineScroll from "./TimelineScroll";

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Science",
      institution: "CMR Institute of Technology",
      score: "CGPA: 7.5",
      year: "2022 - 2026",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with strong academic performance.",
    },
    {
      degree: "Intermediate",
      institution: "Sri Vidya Junior College",
      score: "Percentage: 80%",
      year: "2020 - 2022",
      description:
        "Completed Intermediate education with a strong academic foundation in science and mathematics.",
    },
    {
      degree: "Secondary Education",
      institution: "Bapuji High School",
      score: "GPA: 9.3",
      year: "2020",
      description:
        "Completed schooling with a solid academic background and holistic development.",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-black transition-colors"
    >
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title hover:text-portfolio-green transition-colors duration-300 dark:text-white">
            Education & Experience
          </h2>

          <p className="section-subtitle dark:text-gray-300">
            My academic background and journey that shaped my skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-black dark:text-white text-center">
              Education
            </h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-portfolio-green opacity-0 animate-slide-up transform transition hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-2 flex-wrap">

                    <h4 className="text-lg font-bold text-portfolio-black dark:text-white hover:text-portfolio-green transition-colors duration-300">
                      {item.degree}
                    </h4>

                    <span className="text-sm font-medium bg-portfolio-green/10 text-portfolio-green px-3 py-1 rounded-full mt-1 md:mt-0">
                      {item.year}
                    </span>
                  </div>

                  <div className="text-portfolio-gray dark:text-gray-300 font-medium mb-2">
                    {item.institution}
                  </div>

                  <div className="text-portfolio-green font-semibold mb-2">
                    {item.score}
                  </div>

                  <p className="text-portfolio-gray dark:text-gray-300 text-sm">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;