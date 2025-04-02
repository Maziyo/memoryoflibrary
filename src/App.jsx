import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebSocketTest from "./WebSocket.jsx";


import Landing from "./pages/landing.jsx";
import Collect from "./pages/collect.jsx";
import Firstend from "./pages/firstend.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/collect" element={<Collect />} />
        <Route path="/firstend" element={<Firstend />} />
      </Routes>
      <WebSocketTest />
    </BrowserRouter>
  );
}

export default App;
