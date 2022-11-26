import styled from "styled-components";
import { useState, useContext } from "react";
import { LoginContext } from "./auth";
import axios from "axios";


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setToken} = useContext(LoginContext)


    function login(event){
        event.preventDefault();
        const requisicao = axios.post("http://localhost:5000/sign-in",{
            email,
            password
        })
        requisicao.then(response => {
            setToken(response.data.token);
            console.log(response.data)
        })
    }
    return (
        <>
            <Header>
                <img src="carrinho.png" alt="carrinho" />
                <p>Login</p>
            </Header>
            <Signin onSubmit={login}>
                <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">LOGIN</button>
            </Signin>
        </>
    )
}
const Header = styled.div`
    width: 100%;
    height: 389px;
    left: 0px;
    top: 0px;
    background: linear-gradient(180deg, #F35B1C 0%, #F45C1E 33.33%, #F3731D 66.67%, #F4841E 100%);
    border-radius: 0px 0px 0px 100px;
    img{
        margin-left:146.63px;
        margin-top:126.34px;
        position:relative;
        z-index:1;
        align-items:center;
    }
    p{
        margin-top:89.34px;
        text-align:right;
        margin-right:43px;
        color:#FFFFFF;
        font-size: 26px;

    }
`
const Signin = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:74px;
    input:nth-child(1){
        width: 303px;
        height: 48px;  
        border-radius: 5px;
        border:none;
        border: 1px solid rgba(0, 0, 0, 0.13);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    input:nth-child(2){
        width: 303px;
        height: 48px;
        border-radius: 5px;
        border:none;
        margin-top:36px;
        border: 1px solid rgba(0, 0, 0, 0.13);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    input:nth-child(3){
        width: 303px;
        height: 48px;  
        border-radius: 5px;
        border:none;
        margin-top:36px;
        border: 1px solid rgba(0, 0, 0, 0.13);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    button{
        color:#FFFFFF;
        background: linear-gradient(270deg, #F45C1E 0%, #F3711C 47%, #F3821E 97.03%);        
        border:none;
        width: 303px;
        height: 48px;
        margin-top:36px;
        font-size: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

`