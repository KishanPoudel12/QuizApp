import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../assets/context/QuizContext";
import { Navigate } from "react-router-dom";
const Results = () => {
   const { correct, questions, resetQuiz, seeResult } = useQuiz();
   const navigate=useNavigate()

   
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">📊 Quiz Results</h1>

        {/* Score Display */}
        <p className="text-2xl font-semibold mb-6">
          You scored{" "}
          <span className="text-indigo-500 dark:text-indigo-400">
            {correct}
          </span>{" "}
          out of {questions.length}!
        </p>

        {/* Play Again Button */}
        <button
          onClick={() =>{
          //  timeSubmit()
           seeResult();
           navigate("/quiz")}
          }
          className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg transition"
        >
          🔄 See Results
        </button>

        <button
          onClick={() => {
            resetQuiz(); // Ensure quiz resets before navigating
            navigate("/quiz");
          }}
          className="block w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
        >
          🔄 Play Again
        </button>

        <button
          onClick={() => {
            resetQuiz()
            navigate("/")
          }}
          className="block w-full mt-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition"
        >
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
};

export default Results;
