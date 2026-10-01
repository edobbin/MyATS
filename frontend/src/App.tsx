import AnalyzerForm from "./components/analyzer/AnalyzerForm";
import ResultPage from "./components/results/ResultPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingPage from "./components/loading/loadingPage";
import LoginPage from "./components/auth/LoginPage";
import SignUpPage from "./components/auth/SignUpPage";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = false; // replace with Cognito auth state later

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="page-container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AnalyzerForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analyzing"
            element={
              <ProtectedRoute>
                <LoadingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results"
            element={
              <ProtectedRoute>
                <ResultPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
