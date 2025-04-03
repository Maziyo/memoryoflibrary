import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/collect.css";
import QUESTIONS from "../assets/questions.jsx";
import SAMPLES from "../assets/sampleansers.jsx";
import websocketService from "../WebSocketService.js";



document.addEventListener("focusout", () => {
    window.scrollTo(0, 0);
});


function Collect() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [questionIndex, setQuestionIndex] = useState(0); // 질문의 인덱스를 저장
    const [fade, setFade] = useState("fade-in");

    useEffect(() => {
        // 랜덤한 질문 선택 (인덱스를 저장)
        const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
        setQuestionIndex(randomIndex);
    }, []);

    const userUUID = localStorage.getItem("ID");

    const handleClick = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            websocketService.sendMessage(JSON.stringify({ ID: userUUID, question :QUESTIONS[questionIndex] ,memory: inputValue })); // ✅ WebSocket 메시지 전송
            console.log(inputValue);

            setFade("fade-out"); // 페이드 아웃 시작

            // 일정 시간이 지난 후 페이지 이동
            setTimeout(() => {
                navigate("/firstend");
            }, 1000); // 1초 후 이동
        }
    };

    return (
        <div className={fade}>
            <hr className="vertical-hr" />
            <div id="main">
                <div className="main01">
                    <div id="main01-con">
                        <p className="recording">기억의 도서관</p>
                        <h1 className="question">{QUESTIONS[questionIndex]}</h1>
                    </div>
                </div>
                <hr />
                <div id="main02">
                    <textarea
                        className="userInput"
                        type="text"
                        placeholder={SAMPLES[questionIndex]}
                        autoFocus
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
        </div>
    );
}

export default Collect;
