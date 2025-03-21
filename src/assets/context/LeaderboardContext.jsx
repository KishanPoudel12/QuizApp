import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LeaderboardContext = createContext();

export const LeaderboardContextProvider = ({ children }) => {
  const { user } = useAuth0();
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users") || "[]");
  });

  const handleScore = (latestscore) => {
    if (user) {
      console.log("Score is =>", latestscore);
      setUsers((prevUsers) => {
        const findUser = prevUsers.findIndex((u) => u?.email === user?.email);
        if (findUser !== -1) {
          const updatedUser = prevUsers.map((u, ind) => {
            if (ind === findUser)
              return {
                ...u,
                score: latestscore >= u.score ? latestscore : u.score,
              };
              return u
          });
          localStorage.setItem("users", JSON.stringify(updatedUser));
          return updatedUser;
        } else {
          const newUser = {
            name: user.given_name,
            score: latestscore,
            email: user.email,
          };
          const updatedUsers = [...prevUsers, newUser];
          localStorage.setItem("users", JSON.stringify(updatedUsers));
          return updatedUsers;
        }
      });
    }
  };

  useEffect(() => {
    if (user) {
      // if user Exists garxa bhane then setUser ma change garde
      setUsers((prevUser) => {
        const isExistingUser = prevUser.findIndex(
          (usr) => usr?.email === user?.email
        );
        if (isExistingUser !== -1) {
          const getUsers = [...prevUser];
          getUsers[isExistingUser] = {
            ...getUsers[isExistingUser],
            score: getUsers[isExistingUser].score,
          };
          localStorage.setItem("users", JSON.stringify(getUsers));
          return getUsers;
        } else {
          const newUser = {
            name: user.given_name,
            score: 0,
            email: user.email,
          };
          const updatedUser = [...prevUser, newUser];
          localStorage.setItem("users", JSON.stringify(updatedUser));
          return updatedUser;
        }
      });
    }
  }, [user]);
  return (
    <LeaderboardContext.Provider value={{ users, setUsers, handleScore }}>
      {children}
    </LeaderboardContext.Provider>
  );
};
export const useLeaderBoard = () => useContext(LeaderboardContext);
