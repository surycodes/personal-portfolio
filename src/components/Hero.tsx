import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black pt-20 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left Column */}
          <div className="space-y-5 md:text-left text-center order-2 md:order-1">

            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-black dark:text-white">
              Hi, I'm{" "}
              <span className="text-portfolio-green">
                Surya Prakash Pasupala
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-portfolio-gray dark:text-gray-300 font-medium">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Machine Learning Engineer",
                  1500,
                  "AI Developer",
                  1500,
                  "Data Science Enthusiast",
                  1500,
                  "Python & ML Developer",
                  1500,
                ]}
                wrapper="span"
                cursor
                repeat={Infinity}
              />
            </div>

            <p className="text-portfolio-gray dark:text-gray-300">
              I am a passionate developer focused on building intelligent
              solutions using Machine Learning and modern web technologies.
            </p>

            <div className="flex gap-4 mt-8 md:justify-start justify-center">

              {/* Portfolio Button */}
              <a href="#about" className="btn-primary">
                View My Portfolio
              </a>

              {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Surya-Prakash-resume.pdf"
              className="flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-black hover:bg-gray-100 dark:bg-white dark:text-black transition"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>

            </div>

          </div>

          {/* Right Column */}
          <div className="flex justify-center order-1 md:order-2 relative group">

            <div className="relative">

              {/* Background Effects */}
              <div className="absolute -z-10 w-full h-full rounded-full bg-portfolio-green/10 group-hover:scale-110 group-hover:rotate-6 transition duration-500"></div>

              <div className="absolute -z-10 w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-portfolio-yellow/10 group-hover:scale-125 group-hover:-rotate-6 transition duration-700"></div>

              <div className="absolute -z-10 w-full h-full rounded-full bg-blue-300/10 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition duration-500"></div>

              <div className="absolute -z-10 w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-700"></div>

              {/* Profile Image */}
              <div className="rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 border-4 border-white dark:border-gray-700 shadow-xl transition-transform duration-500 group-hover:scale-105">
                <img
                  src={profileImage}
                  alt="Surya Prakash"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;