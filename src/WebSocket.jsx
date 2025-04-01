import { useEffect, useState } from "react";

const WEBSOCKET_URL = import.meta.env.VITE_WEBSOCKET_URL;

function WebSocketTest() {
  const [messages, setMessages] = useState([]);
  const [ws, setWS] = useState(null);
  const [status, setStatus] = useState("Disconnected");

  useEffect(() => {
    if (!WEBSOCKET_URL) {
      console.error("WebSocket URL이 설정되지 않았습니다.");
      return;
    }

    const socket = new WebSocket(WEBSOCKET_URL);
    setWS(socket);

    socket.onopen = () => {
      console.log("WebSocket 연결 성공");
      socket.send(JSON.stringify({ message: "WEB" }));
      setStatus("Connected");
    };

    socket.onmessage = (event) => {
      console.log("메시지 수신:", event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onerror = (error) => {
      console.error("WebSocket 에러:", error);
      setStatus("Error");
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
      setStatus("Disconnected");
    };

    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);
}

export default WebSocketTest;