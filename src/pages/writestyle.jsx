import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/writestyle.css";
import websocketService from "../WebSocketService.js";

function Writestyle() {
    const navigate = useNavigate();
    const [WstyleInput, SetWstyleInput] = useState('');
    const [fade, setFade] = useState("fade-in");

    const userUUID = localStorage.getItem("ID");

    const handleClick = (e) => {
        e.preventDefault();

        websocketService.sendMessage(JSON.stringify({ ID: userUUID, writestyle: WstyleInput }));
        console.log(WstyleInput);

        setFade("fade-out");

        setTimeout(() => {
            navigate("/end");
        }, 1000);
    };

    return (
        <div>

            <div className="writestyle_main">
                <div className="writestyle_main01">
                    <h1 className="writestyle_title">당신의 순간을<br />어떤 목소리로<br />들려주고 싶으신가요?</h1>
                </div>

                <form className="writestyle_form" onSubmit={handleClick}>
                    <button className="writestyle_button" onClick={() => SetWstyleInput("속도감 / 강렬한 / 직관적인 문체 (정유정)")} type="submit">
                        <p>속도감 / 강렬한 / 직관적인</p>
                        <h3>기억은 불쑥 고개를 들었고, 커피는 식을 틈이<br/>없었다. 비는 내리고, 나는 다시 그날의 끝에 썼다.</h3>
                    </button>
                    <hr />
                    <button className="writestyle_button" onClick={() => SetWstyleInput("잔잔한 / 따뜻한 / 상상력인 문체 (김초엽)")} type="submit">
                        <p>잔잔한 / 따듯한 / 상상력</p>
                        <h3>커피잔 속 김이 흐릿한 시간을 비추고,<br/>빗방울은 조용히 추억을 두드린다.</h3>
                    </button>
                    <hr />
                    <button className="writestyle_button" onClick={() => SetWstyleInput("유쾌한 / 일상적인 / 위트있는 문체 (정세랑)")} type="submit">
                        <p>유쾌한 / 일상적인 / 위트있는</p>
                        <h3>창밖은 물바다, 머릿속은 추억의 대기행성.<br/>비 오는 날의 커피는 언제나, 과거를 호출하는<br/>버튼이다.</h3>
                    </button>
                    <hr />
                    <button className="writestyle_button" onClick={() => SetWstyleInput("슬픈 / 절제된 문체 (한강)")} type="submit">
                        <p>슬픈 / 절제된</p>
                        <h3>비는 흘렀고, 난 말없이 커피를 마셨다. 식어가는<br/>온기 속에서 이름 하나하나가 천천히 가라앉았다.</h3>
                    </button>
                    <hr />
                </form>
            </div>
            <hr className="vertical-hr" />
        </div>
    );
}

export default Writestyle