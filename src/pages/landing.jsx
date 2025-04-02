import "../styles/landing.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Landing() {

    const navigate = useNavigate();
    const [fade, setFade] = useState("fade-in");

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade("fade-out"); // 페이드 아웃 시작
            setTimeout(() => {
                navigate("/collect"); // 페이지 이동
            }, 1000); // 페이드 아웃 시간 후 이동
        }, 2000); // 3초 대기

        return () => clearTimeout(timer); // 타이머 정리
    }, [navigate]);

    return (
        <div id="title" className={fade}>
            <h1 className="left">기억의</h1>
            <h1 className="right">도서관</h1>
        </div>
    );
}

export default Landing