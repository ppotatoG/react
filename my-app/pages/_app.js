import react, {useState} from "react";
import styled from "styled-components";
import '../styles/globals.css'
import styles from "../styles/Home.module.css";

const Header = styled.h2`
    font-weight: 400;
    font-size: 28px;
    color: #191919;
    word-break: keep-all;
`;

const Text = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #191919;
`;

const DetailButton = styled.a`
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    text-decoration-line: underline;
    color: #191919;
`;

const ConfirmButton = styled.a`
    font-weight: 400;
    font-size: 12px;
    color: #fff;
    display: block;
    background: #ff4a01;
    border-radius: 50px;
    width: fit-content;
    padding: 2vw 8vw;
    position: relative;
`;

const ConfirmCount = styled.span`
    position: absolute;
    top: -2vw;
    right: -2vw;
    border-radius: 50px;
    background: rgba(0,0,0,.8);
    display: block;
    width: 6vw;
    height: 6vw;
    line-height: 2;
    text-align: center;
`;

const MyApp = () => {
    const [number, setNumber] = useState(0);

    const upCount = () => {
        setNumber(number + 1);
    }
    return (
        <div className={styles.complete}>
            <Header>소연님, 픽업이 완료되었습니다.</Header>
            <Text>이제 원하시는 사람들과 원하시는 대로 마셔보세요. :)</Text>
            <DetailButton>주문 내역 상세보기</DetailButton>
            <ConfirmButton onClick={upCount}>
                확인
                <ConfirmCount number={number}>{number}</ConfirmCount>
            </ConfirmButton>
        </div>
    )
}

export default MyApp;