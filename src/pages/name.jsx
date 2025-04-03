import "../styles/name.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import websocketService from "../WebSocketService.js";

function NameInput() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [fade, setFade] = useState("fade-in");

    const userUUID = localStorage.getItem("ID");

    const handleClick = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            websocketService.sendMessage(JSON.stringify({ ID: userUUID, name: inputValue })); // ✅ WebSocket 메시지 전송
            console.log(inputValue);

            setFade("fade-out"); // 페이드 아웃 시작

            // 일정 시간이 지난 후 페이지 이동
            setTimeout(() => {
                navigate("/collect");
            }, 1000); // 1초 후 이동
        }
    };

    return (
        <div className={fade}>
            <hr className="vertical-hr" />
            <div id="Nmain">
                <div id="Nmain01">
                    <div id="Nmain01-con">
                        <p id="Nrecording">기억의 도서관</p>
                        <h1 id="Nquestion">당신을 어떤 이름으로<br />기록하면 좋을 까요?</h1>
                    </div>
                </div>
                <hr />
                <div id="Nmain02">
                    <textarea
                        id="NuserInput"
                        type="text"
                        placeholder={`익숙한 이름이어도,\n새로운 별명이어도\n괜찮습니다.`}
                        autoFocus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div id="Nbtn">
                <form onSubmit={handleClick}>
                    <button type="submit" disabled={!inputValue.trim()}>기록하기</button>
                </form>
            </div>
        </div>
    );
}

export default NameInput;
