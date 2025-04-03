import "../App.css";
import { useNavigate } from "react-router-dom";
import "../styles/firstend.css"
import iconGif from "../assets/icon.gif";

function Firstend() {

    return (
        <>
            <div>
                <img src={iconGif} alt="icon" />
                <h1 id="ment">지금 당신이 꺼낸 기억은<br />한 편의 이야기로 이어질<br />준비를 하고 있어요.</h1>
            </div>

        </>

    );
}

export default Firstend