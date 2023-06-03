import styled from "styled-components";

export const LoginContainer = styled.div`
    background: #1d5d61;
    height: 100vh;
    width: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


export const LoginForm = styled.div`
    height: 50%;
    width: 50%;
    padding: 10px 0;  
    background: #f2f2f2;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;

    a {
        color: #333;
        text-decoration: none;
    }
`;

export const Input = styled.input`
    height: 45px;
    width: 50%;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #000000;
    outline: 0;
`;

export const Button = styled.button`
    height: 35px;
    width: 20%;
    background: #073033;
    color: #ffff;
    font-size: 16px;
    border-radius: 5px;
    margin: 15px 0;
    cursor: pointer;
`;

