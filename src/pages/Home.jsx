import { Link } from "react-router-dom";
import React from "react";
import Leaderboard from "./Leaderboard";
import { useTheme } from "../assets/context/ThemeContext";
import { useAuth0 } from "@auth0/auth0-react";
import {useQuiz} from '../assets/context/QuizContext'
const Home = () => {
  const { theme } = useTheme();
  const { user } = useAuth0();
  const {resetQuiz}=useQuiz()
  return (
    <>
      <div
        className={`min-h-screen flex flex-col items-center justify-center transition-all 
                      ${
                        theme === "dark"
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
      >
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          🔥 Welcome to QuizoMania! { user ? user?.email :null} 🎉
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Test your knowledge and climb the leaderboard!
        </p>
          {/* <p>{user?.email}</p> */}
        {/* Buttons */}
        <div className="flex space-x-4">
          <Link to="/quiz">
            <button 
            onClick={resetQuiz}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition">
              🎯 Start Quiz
            </button>
          </Link>
          <Link to="/leaderboard">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition">
              🏆 Leaderboard
            </button>
          </Link>
        </div>
      </div>

      {/* Leaderboard Component */}
      <Leaderboard />
    </>
  );
};

export default Home;
