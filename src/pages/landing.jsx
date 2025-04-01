import "../App.css";
import { useNavigate } from "react-router-dom";

function Landing(){

    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate("/collect"); // 이동할 페이지 경로 설정
    };

    return(
        <div onClick={handleClick}>
            <h1>LandingPage</h1>
        </div>
    );
}

export default Landing