import React, { useState } from "react";
import questions from "../data/questions";
function Question({ question, answerHandler, submitted, selectedAns }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg ">
      {/* Question Text */}
      <p className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Q{question?.id + 1}. {question?.question}
      </p>
      <div className="grid gap-4">
        {question.options.map((option, index) => {
          let isSelected = selectedAns[question.id] === option;

          let isCorrect = questions[question.id].answer === option;
         

          return (
            <button
              disabled={submitted}
              onClick={() => answerHandler(option)}
              key={index}
              className={`w-full py-3 px-5 rounded-lg border border-gray-300 dark:border-gray-600 ${
                submitted
                  ? isCorrect
                    ? "bg-green-500"
                    : isSelected
                    ? "bg-red-500"
                    : "bg-gray-500"
                  : null
              } dark:${
                submitted
                  ? isCorrect
                    ? "bg-green-500"
                    : isSelected
                    ? "bg-red-500"
                    : "bg-gray-500"
                  : null
              } text-gray-900 dark:text-white font-medium transition-all hover:bg-indigo-500 dark:hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
