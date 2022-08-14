import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../src/components/Form";
import Home from "../src/components/Home";
import Blog from "../src/components/Blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
