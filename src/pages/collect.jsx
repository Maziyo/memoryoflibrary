import { useNavigate } from "react-router-dom";
import "../styles/collect.css"

function Collect() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/firstend"); // 이동할 페이지 경로 설정
    };

    return (
        <>
            <div id="main">
                <div className="main01">
                    <div id="main01-con">
                        <p className="recording">기록하기</p>
                        <h1 className="question">가장 기억에 남는<br />선택의 순간은<br />언제인가요?</h1>
                    </div>
                </div>

                <div id="main02">
                    <textarea
                        className="userInput"
                        type="text"
                        placeholder="샘플 테스트"></textarea>
                </div>

            </div>

            <div className="btn" >
                <form onSubmit={handleClick}>
                    <button type="submit">기록하기</button>
                </form>
            </div>

        </>
    );
}

export default Collect