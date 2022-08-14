import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Dialog from "./components/Dialog/Dialog";
import WebToCore from "./components/Process/WebToCore";
import CoreToWeb from "./components/Process/CoreToWeb";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/dialog" element={<Dialog />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="emit" element={<WebToCore />} />
          <Route path="emitAll" element={<CoreToWeb />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
