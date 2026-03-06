
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillQuiz from "@/components/SkillQuiz";

const Index = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <SkillQuiz />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

