import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/collect.css";
import websocketService from "../WebSocketService.js";

const QUESTIONS = [
    "최근에 뭔가를 망쳤다고 느낀 적 있어? 그때 무슨 일이 있었어?",
    "말하지 말 걸 그랬다 싶었던 순간이 있어?",
    "되돌릴 수 있다면, 그때 하지 않았을 선택이 있어?",
    "누군가의 한 마디 때문에 생각이 바뀌었던 적 있어?",
    "별일 아닌 것 같았는데 그 이후로 자주 생각나는 장면이 있어?",
    "마지막일 줄 몰랐는데 마지막이 되어버린 만남이 있어?",
    "평소답지 않은 행동을 했던 적 있어? 왜 그랬던 것 같아?",
    "네가 누군가를 정말 이해했다고 느꼈던 순간은 언제야?",
    "요즘 네가 자주 떠올리는 장면은 뭐야?",
    "선택의 순간 중 가장 기억에 남는 순간은 언제야?",
    "너에게 가장 행복한 순간은 언제였어?",
    "너에게 가장 슬픈 순간은 언제였어?",
    "처음으로 무언가를 잃었다고 느낀 건 언제였어?",
    "가장 성공했다고 느꼈던 일이 뭐야?",
    "네가 가장 빛을 발했던 순간은 언제인 것 같아?",
    "네가 가장 어두웠던 순간은 언제인 것 같아?",
    "네가 느꼈던 가장 깊은 감정은 뭐야?"
];

function Collect() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [question, setQuestion] = useState("");

    useEffect(() => {
        // 컴포넌트가 처음 렌더링될 때만 실행
        setQuestion(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]);
    }, []); // 빈 배열을 넣어 한 번만 실행

    const userUUID = localStorage.getItem("ID");

    const handleClick = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            websocketService.sendMessage(JSON.stringify({ ID: userUUID, memory: inputValue })); // ✅ WebSocket 메시지 전송
            console.log(inputValue);
            navigate("/firstend"); // 이동할 페이지 경로 설정
        }
    };

    return (
        <>
            <hr className="vertical-hr" />
            <div id="main">
                <div className="main01">
                    <div id="main01-con">
                        <p className="recording">기억의 도서관</p>
                        <h1 className="question">{question}</h1>
                    </div>
                </div>
                <hr />
                <div id="main02">
                    <textarea
                        className="userInput"
                        type="text"
                        placeholder="샘플 테스트"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="btn">
                <form onSubmit={handleClick}>
                    <button type="submit" disabled={!inputValue.trim()}>기록하기</button>
                </form>
            </div>
        </>
    );
}

export default Collect;
