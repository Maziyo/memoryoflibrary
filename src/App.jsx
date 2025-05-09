import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebSocketTest from "./WebSocket.jsx";
import getOrCreateUUID from './createUUID.jsx';


import Landing from "./pages/landing.jsx";
import NameInput from "./pages/name.jsx";
import Collect from "./pages/collect.jsx";
import Firstend from "./pages/firstend.jsx";
import Genre from "./pages/genre.jsx";
import Writestyle from "./pages/writestyle.jsx";
import EndPage from "./pages/end.jsx";

const userUUID = getOrCreateUUID();
console.log("User UUID:", userUUID);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/name" element={<NameInput />} />
        <Route path="/collect" element={<Collect />} />
        <Route path="/firstend" element={<Firstend />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/writestyle" element={<Writestyle />} />
        <Route path="/end" element={<EndPage />} />
      </Routes>
      <WebSocketTest />
    </BrowserRouter>
  );
}

export default App;
