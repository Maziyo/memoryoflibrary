import "../App.css";
import { useNavigate } from "react-router-dom";

function Collect(){

    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate("/firstend"); // 이동할 페이지 경로 설정
    };

    return(
        <div onClick={handleClick}>
            <h1>CollectPage</h1>
        </div>
    );
}

export default Collect