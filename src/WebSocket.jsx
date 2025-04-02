import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 설정
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_KEY);


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

    socket.onopen = async () => {
      console.log("WebSocket 연결 성공");
      setStatus("Connected");

      const useruuid = uuidv4();

      try {
        const { error } = await supabase.from('memoryoflibrary').insert([{ "ID" : useruuid }]);
        if (error) throw error;
        console.log("Supabase에 UUID 저장 성공:", useruuid);
      } catch (error) {
        console.error("Supabase error during insert:", error);
      }
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

  // return (
  //   <div>
  //     <h2>WebSocket 상태: {status}</h2>
  //     <ul>
  //       {messages.map((msg, index) => (
  //         <li key={index}>{msg}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default WebSocketTest;
