import "../App.css";
import "../styles/end.css"
import iconGif from "../assets/icon.gif";

function EndPage() {

    return (
        <>
            <div>
                <img src={iconGif} alt="icon" />
                <h1 id="ment">당신의 기억에 스며들어,<br/>책을 다시 펼칠 수 있을 것 같아요!<br/>감사합니다.</h1>
            </div>

        </>

    );
}

export default EndPage