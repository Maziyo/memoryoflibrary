import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

function Landing(){

    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate("/collect"); // 이동할 페이지 경로 설정
    };

    return(
        <div id="title">
            <h1 className="left">기억의</h1>
            <h1 className="right">도서관</h1>
        </div>
    );
}

export default Landing