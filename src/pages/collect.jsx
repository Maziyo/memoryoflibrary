import { useNavigate } from "react-router-dom";
import "../styles/collect.css"

function Collect() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/firstend"); // 이동할 페이지 경로 설정
    };

    return (
        <>
            <div className="main">
                <div id="main-context">
                    <p className="recording">기록하기</p>
                    <h1 className="question">가장 기억에 남는<br />선택의 순간은<br />언제인가요?</h1>
                    <textarea
                        className="userInput"
                        type="text"
                        placeholder="샘플 테스트"></textarea>


                </div>
                <div id="book-spine">
                    <p>기억의 도서관</p>
                    <p>4월 어느날의 몇번째 질문</p>
                </div>

            </div>


            <div id="btn">
                <form onSubmit={handleClick}>
                    <button type="submit">기록하기</button>
                </form>
            </div>

        </>
    );
}

export default Collect