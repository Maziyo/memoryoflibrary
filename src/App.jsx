import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebSocketTest from "./WebSocket.jsx";


import Landing from "./pages/landing.jsx";
import Collect from "./pages/collect.jsx";
import Firstend from "./pages/firstend.jsx";
import Genre from "./pages/genre.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/collect" element={<Collect />} />
        <Route path="/firstend" element={<Firstend />} />
        <Route path="/genre" element={<Genre />} />
      </Routes>
      <WebSocketTest />
    </BrowserRouter>
  );
}

export default App;
