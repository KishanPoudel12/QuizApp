import React from "react";
import Question from "./Question";
import questions from "./../data/questions.js";
import { useQuiz } from "../assets/context/QuizContext.jsx";
import useTimer from "../hooks/useTimer.jsx";
import formatTime from "../utils/formatTime.js";

const Quiz = () => {
const {
  currIndex,
  selectedAns,
  submitted,
  nextQstn,
  prevQstn,
  handleSubmit,
  answerHandler,
  finalTime,
} = useQuiz();
 
const { seconds, stopTimer } = useTimer(submitted);

const onSubmit=(e)=>{
  stopTimer()
  handleSubmit(e,seconds)
}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      {/* {hours} :{minutes} : {seconds} : */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        {finalTime ? (
          <h1 className="text-2xl font-bold text-center mb-6">
            {formatTime(finalTime)}
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-center mb-6">
            📝 {formatTime(seconds)}
          </h1>
        )}
        <h2 className="text-lg font-semibold text-center mb-4">
          Question {currIndex + 1} / {questions.length}
        </h2>
        {/* Display the Current Question */}
        <Question
          question={questions[currIndex]}
          answerHandler={answerHandler}
          submitted={submitted}
          selectedAns={selectedAns}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevQstn}
            disabled={currIndex === 0}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
          >
            ⬅️ Previous
          </button>

          <button
            onClick={nextQstn}
            disabled={currIndex === questions.length - 1}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
          >
            Next ➡️
          </button>
        </div>

        {/* Submit Button (Only Visible on Last Question) */}
        {currIndex === questions.length - 1 && (
          <button
            onClick={onSubmit}
            // disabled={submitted}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {submitted ? "Go to Result" : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
