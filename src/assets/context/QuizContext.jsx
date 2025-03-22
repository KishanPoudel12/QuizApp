import React, { useContext } from "react";
import questions from "../../data/questions";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLeaderBoard } from "../context/LeaderboardContext";
const QuizContext = createContext();
export const QuizContextProvider = ({ children }) => {
  const { handleScore } = useLeaderBoard();
  const [currIndex, setCurrInd] = useState(0);
  const [selectedAns, setSelectedAns] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finalTime, setFinalTime] = useState(null);
  const navigate = useNavigate();

  const resetQuiz = () => {
    setCurrInd(0);
    setSelectedAns([]);
    setFinalTime(null)
    setSubmitted(false);
    setCorrect(0);
  };
  const seeResult = () => {
    setCurrInd(0);
  };
  const answerHandler = (answer) => {
    if (selectedAns[currIndex] === answer) {
      return;
    } else {
      setSelectedAns((prev) => {
        const updatedAns = { ...prev, [currIndex]: answer };
        return updatedAns;
      });
    }
  };

  const nextQstn = () => {
    if (currIndex < questions.length - 1) {
      setCurrInd((prev) => prev + 1);
    }
  };

  const prevQstn = () => {
    if (currIndex > 0) {
      setCurrInd((prev) => prev - 1);
    }
  };

  const handleSubmit = (e, seconds) => {
    e.preventDefault();
    setFinalTime(seconds);
    setSubmitted(true);

    const correctAns = questions.reduce((count, qstn, ind) => {
      console.log("selected Ans =>", selectedAns);
      return qstn.answer === selectedAns[ind] ? count + 1 : count;
    }, 0);

    console.log("correctAns is =>", correctAns);
    console.log("correct is =>", correct);
    setCorrect(correctAns);
    handleScore(correctAns);
    //form leaderboard
    navigate("/result");
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        answerHandler,
        nextQstn,
        prevQstn,
        handleSubmit,
        currIndex,
        selectedAns,
        submitted,
        setCurrInd,
        setSelectedAns,
        setSubmitted,
        correct,
        resetQuiz,
        seeResult,
        finalTime,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
export default QuizContext;
