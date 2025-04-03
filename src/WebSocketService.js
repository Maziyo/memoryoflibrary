// websocketService.js
const WEBSOCKET_URL = import.meta.env.VITE_WEBSOCKET_URL;

class WebSocketService {
  constructor() {
    if (!WEBSOCKET_URL) {
      console.error(" WebSocket URL이 설정되지 않았습니다.");
      return;
    }

    this.socket = new WebSocket(WEBSOCKET_URL);

    this.socket.onopen = () => {
      console.log("WebSocket 연결 성공!");
    };

    this.socket.onmessage = (event) => {
      console.log("메시지 수신:", event.data);
    };

    this.socket.onerror = (error) => {
      console.error(" WebSocket 오류:", error);
    };

    this.socket.onclose = () => {
      console.log(" WebSocket 연결 종료");
    };
  }

  sendMessage(message) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
      console.log(" 메시지 전송:", message);
    } else {
      console.error("WebSocket이 아직 연결되지 않았습니다.");
    }
  }
}

const websocketService = new WebSocketService();
export default websocketService;
