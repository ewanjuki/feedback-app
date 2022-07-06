import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import { FeedbackProvider } from "./store/feedback-context";

function App() {
  return (
    <BrowserRouter>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>{" "}
      </FeedbackProvider>
    </BrowserRouter>
  );
}

export default App;
