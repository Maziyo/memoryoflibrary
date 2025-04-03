import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/genre.css";
import websocketService from "../WebSocketService.js";

function Genre() {
    const navigate = useNavigate();
    const [genreInput, SetgenreInput] = useState('');
    const [fade, setFade] = useState("fade-in");

    const userUUID = localStorage.getItem("ID");

    const handleClick = (e) =>{
        e.preventDefault();

        websocketService.sendMessage(JSON.stringify({ID: userUUID, genre: genreInput}));
        console.log(genreInput);

        setFade("fade-out");

        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    return (
            <div>
                
                <div className="genre_main">
                    <div className="genre_main01">
                        <h1 className= "genre_title">당신의 순간이 한 편의<br />이야기라면, 어떤 색으로<br />펼쳐질까요?</h1>
                    </div>

                    <form className="genre_form" onSubmit={handleClick}>
                        <button  className="genre_button" onClick={()=>SetgenreInput("로맨스")} type="submit">
                            <h3>로맨스</h3>
                            <p>분홍빛 설렘이 스며든 이야기</p>
                        </button>
                        <hr/>
                        <button className="genre_button" onClick={()=>SetgenreInput("드라마")} type="submit">
                            <h3>드라마</h3>
                            <p>고요하지만 깊은 이야기</p>
                        </button>
                        <hr/>
                        <button className="genre_button" onClick={()=>SetgenreInput("SF")} type="submit">
                            <h3>SF</h3>
                            <p>현실을 살짝 벗어난 이야기</p>
                        </button>
                        <hr/>
                        <button className="genre_button" onClick={()=>SetgenreInput("에세이/다큐")} type="submit">
                            <h3>에세이 / 다큐</h3>
                            <p>가만히 꺼내보는 진짜 이야기</p>
                        </button>
                        <hr/>
                        <button className="genre_button" onClick={()=>SetgenreInput("블랙 코미디")} type="submit">
                            <h3>블랙 코미디</h3>
                            <p>웃긴데 어쩐지 쫌 짠한 이야기</p>
                        </button>
                        <hr/>
                    </form>
                </div>
                <hr className="vertical-hr" />
            </div>
    );
}

export default Genre