import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PartyPopper } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const allQuestions: Question[] = [
  {
    question: "Which programming language is primarily used in my Machine Learning projects?",
    options: ["Java", "Python", "C++", "Ruby"],
    correct: 1
  },
  {
    question: "Which library is commonly used for building ML models?",
    options: ["NumPy", "Scikit-learn", "Matplotlib", "Bootstrap"],
    correct: 1
  },
  {
    question: "What type of Machine Learning is used in the Diabetes Prediction System?",
    options: ["Unsupervised Learning", "Reinforcement Learning", "Supervised Learning", "Deep Reinforcement Learning"],
    correct: 2
  },
  {
    question: "Which algorithm is used in the Diabetes Prediction System?",
    options: ["Decision Tree", "K-Means", "Logistic Regression", "Naive Bayes"],
    correct: 2
  },
  {
    question: "Which tool is used to deploy my ML web app?",
    options: ["Docker", "Streamlit", "Firebase", "Heroku"],
    correct: 1
  }
];

const SkillQuiz = () => {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [celebration, setCelebration] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);

  const shuffleQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setCurrentQuestions(shuffleQuestions());
  }, []);

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === currentQuestions[currentQuestion].correct;
    const newAnsweredCorrectly = [...answeredCorrectly];
    newAnsweredCorrectly[currentQuestion] = isCorrect;
    setAnsweredCorrectly(newAnsweredCorrectly);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < currentQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);

      if (score + (isCorrect ? 1 : 0) === currentQuestions.length) {
        setCelebration(true);
        setTimeout(() => setCelebration(false), 2000);
      }
    }
  };

  const resetQuiz = () => {
    const allCorrect = answeredCorrectly.every(ans => ans === true);
    if (allCorrect) {
      setCurrentQuestions(shuffleQuestions());
    }

    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setCelebration(false);
    setAnsweredCorrectly([]);
  };

  if (!currentQuestions.length) return null;

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-black transition-colors">

      <div className="container mx-auto px-4">

        <h2 className="section-title text-center mb-8 dark:text-white">
          Test Your Knowledge
        </h2>

        <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800">

          <CardHeader>
            <CardTitle className="text-center dark:text-white">
              Skills Quiz
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 relative">

            {celebration && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 animate-fade-in">
                <div className="text-center text-white">
                  <PartyPopper className="w-16 h-16 mx-auto mb-4 animate-bounce-custom" />
                  <h3 className="text-2xl font-bold">Congratulations! 🎉</h3>
                  <p>Perfect Score!</p>
                </div>
              </div>
            )}

            {showScore ? (
              <div className="text-center dark:text-white">
                <h3 className="text-2xl font-bold mb-4">
                  You scored {score} out of {currentQuestions.length}!
                </h3>

                <Button onClick={resetQuiz} variant="outline">
                  Try Again
                </Button>
              </div>
            ) : (
              <div>

                <h3 className="text-xl mb-4 dark:text-white">
                  {currentQuestions[currentQuestion].question}
                </h3>

                <div className="grid gap-3">
                  {currentQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      variant="outline"
                      className="justify-start text-left hover:bg-portfolio-green/10 dark:hover:bg-gray-700"
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Question {currentQuestion + 1} of {currentQuestions.length}
                </div>

              </div>
            )}

          </CardContent>

        </Card>

      </div>

    </section>
  );
};

export default SkillQuiz;