import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js';
import getOrCreateUUID from './createUUID.jsx';

// Supabase 클라이언트 설정
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_KEY);


const userUUID = getOrCreateUUID();
console.log("User UUID:", userUUID);


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
      console.log("WebSocket 연결 성공", userUUID);
      setStatus("Connected");


      // ✅ 먼저 중복 체크
      const { data: existingUser, error: fetchError } = await supabase
        .from("memoryoflibrary")
        .select("ID")
        .eq("ID", userUUID)
        .single(); // 단일 레코드 확인

      if (fetchError) {
        console.error("Error fetching user:", fetchError);
        return;
      }

      if (!existingUser) {
        // ✅ 중복이 없으면 데이터 삽입
        const { error: insertError } = await supabase.from("memoryoflibrary").insert([
          { ID: userUUID, other_column: "value" }
        ]);

        if (insertError) {
          console.error("Supabase insert error:", insertError);
        } else {
          console.log("User inserted successfully!");
        }
      } else {
        console.log("User already exists, skipping insert.");
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
}

export default WebSocketTest
