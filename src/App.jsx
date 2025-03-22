import React,{ lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // ❌ Removed BrowserRouter
import { QuizContextProvider } from "./assets/context/QuizContext";
import { ThemeContextProvider } from "./assets/context/ThemeContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { LeaderboardContextProvider } from "./assets/context/LeaderboardContext";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./assets/components/Header"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Login = lazy(() => import("./pages/Login"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Results = lazy(() => import("./pages/Results"));
const Signup = lazy(() => import("./pages/Signup"));
const Layout = lazy(() => import("./Layout"));

function App() {
  return (
    <React.StrictMode>
      <Auth0Provider
        domain="dev-5iy0o5ddlvwg7mxx.us.auth0.com"
        clientId="WqdhetwegAsiR0v5RwCDzDvyjaAeQnL8"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ThemeContextProvider>
          <LeaderboardContextProvider>
            <QuizContextProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="result" element={<Results />} />
                    <Route path="leaderboard" element={<Leaderboard />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                  </Route>
                </Routes>
              </Suspense>
            </QuizContextProvider>
          </LeaderboardContextProvider>
        </ThemeContextProvider>
      </Auth0Provider>
    </React.StrictMode>
  );
}

export default App;
