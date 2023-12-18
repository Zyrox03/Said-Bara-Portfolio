// Quiz.js

import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';



export const Quiz = () => {
  const {t} = useTranslation()
  const questions = t('quiz.questions', { returnObjects: true })

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [correctedAnswers, setCorrectedAnswers] = useState([]);
  const [emailResponse, setEmailResponse] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      // If the answer is incorrect, add the correct answer to the correctedAnswers state
      setCorrectedAnswers((prev) => [
        ...prev,
        {
          question: questions[currentQuestion].text,
          correctAnswer: questions[currentQuestion].options.find(
            (option) => option.isCorrect
          ).text,
        },
      ]);
    }

    if (currentQuestion === questions.length - 1) {
      setShowFeedback(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setCorrectedAnswers([]);
    setEmailResponse("");
    formik.resetForm();
  };

  const progress = (currentQuestion / questions.length) * 100;

  //   FORMIK

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        // Handle form submission
        setEmailLoading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_API}/api/store-email`,
          values
        );
        const { message } = response.data;
        setEmailResponse(message);
        setTimeout(() => {
          setEmailResponse("");
          formik.resetForm();
        }, 3000);
      } catch (error) {
        console.log(error);
        setEmailError(
          error?.response?.data?.error || "Something went wrong :("
        );
      } finally {
        setEmailLoading(false);
      }
    },
  });

  return (
    <div className=" md:p-4 rounded-md ">
      {showFeedback ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4"> {t('quiz.quiz-completed')} </h2>
          <p className="text-lg">
            Score: {score} / {questions.length}
          </p>

          {correctedAnswers.length > 0 ? (
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2 ">{t('quiz.incorrect-answers-title')}</h3>
              <ul className="list-disc pl-4 text-start">
                {correctedAnswers.map((answer, index) => (
                  <li key={index} className="mb-2">
                    <strong>{answer.question}:</strong>{" "} <br />
                    <span className="text-green-600">
                      {answer.correctAnswer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="w-full mt-4 flex flex-wrap justify-center gap-2 items-center">
                <input
                  type="email"
                  name="email"
                  disabled={emailLoading}
                  id="email"
                  className="p-2 border-none  flex-1 outline-blue-400"
                  placeholder={t('quiz.email-placeholder')}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {emailLoading ? ( <button
                  type="button"
                  className="flex-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                 {t('quiz.loadingClaim')}
                </button>):( <button
                  type="submit"
                  className="flex-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                 {t('quiz.claim')}
                </button>)}
               
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 mt-3">{formik.errors.email}</div>
              ) : null}
              <div className="text-green-500 mt-3">{emailResponse}</div>
              <div className="text-red-500 mt-3">{emailError}</div>
            </form>
          )}

          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
            onClick={handleRestart}
          >
            {t('quiz.restart')}
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Question {currentQuestion + 1}
          </h2>
          <p className="text-lg mb-2">{questions[currentQuestion].text}</p>
          <div className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-gray-200 text-gray-800 py-2 px-4 mx-2 transition rounded-md hover:bg-gray-300"
                onClick={() => handleAnswer(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <p className="text-lg mt-4">Score: {score}</p>
          <progress className="w-full" value={progress} max="100"></progress>
        </div>
      )}
    </div>
  );
};
