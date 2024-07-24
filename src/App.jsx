import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </>
  );
}

export default App;
