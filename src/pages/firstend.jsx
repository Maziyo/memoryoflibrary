import "../App.css";
import { useNavigate } from "react-router-dom";
import "../styles/firstend.css"
import iconGif from "../assets/icon.gif";

function Firstend() {

    return (
        <>
            <div>
                <img src={iconGif} alt="icon" />
                <h1 id="ment">당신의 기억이 기록되었습니다.<br/>도서관에서 만나요.</h1>
            </div>

        </>

    );
}

export default Firstend