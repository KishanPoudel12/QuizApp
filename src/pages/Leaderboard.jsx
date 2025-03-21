import React from "react";
import { useLeaderBoard } from "../assets/context/LeaderboardContext";
const Leaderboard = () => {
  
  const  {users} =useLeaderBoard()


  const sortedUsers = [...users]
    .filter((user) => user && typeof user.score === "number") // Remove null users
    .sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">🏆 Leaderboard</h1>
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Name</th>
              <th className="p-4">Score</th>
            </tr>
          </thead>
          <tbody>
            { sortedUsers && sortedUsers.length>0 ? users.map((player, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4 font-bold">{index+1}</td>
                <td className="p-4">{player?.email}</td>
                <td className="p-4">{player?.score*5}</td>
              </tr>
            ))
          :
          null
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
