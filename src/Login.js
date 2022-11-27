import styled from "styled-components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { LoginContext } from "./contexts/AuthProvider.js";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setToken, setLogado} = useContext(LoginContext)


    function login(event){
        event.preventDefault();
        const requisicao = axios.post("http://localhost:5000/sign-in",{
            email,
            password
        })
        requisicao.then(response => {
            setToken(response.data.token);
            setLogado(true);
            console.log(response.data)
        })
    }

    return (
        <>
            <Header>
                <div className="logo-wrapper">
                    <div className="logo">
                        <img src="carrinho.png" alt="carrinho" />
                    </div>
                </div>
                <p>Login</p>
            </Header>
            <Signin onSubmit={login}>
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}></input>
                <Link to="/sign-up" className="register">Cadastrar-se</Link>
                <button type="submit">LOGIN</button>
            </Signin>
        </>
    )
}
const Header = styled.div`
    height: 389px;
    background: linear-gradient(180deg, #F35B1C 0%, #F45C1E 33.33%, #F3731D 66.67%, #F4841E 100%);
    border-radius: 0px 0px 0px 100px;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .logo-wrapper{
        flex-grow: 8;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo{
            width: 122px;
            height: 121px;
        }
        img{
            width: 100%;
        }
    }
    p{
        flex-grow: 2;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color:#fff;
        text-align: right;
    }
`
const Signin = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:74px;
    padding: 0 50px;
    input{
        height: 48px;  
        border-radius: 5px;
        border:none;
        border: 1px solid rgba(0, 0, 0, 0.13);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        margin-bottom: 36px;
        padding-left: 22px;
        font-size: 18px;
    }
    input:nth-child(2){
        margin-bottom: 0;
    }
    .register {
        margin-top: 20px;
        color: #4E4949;
        text-decoration: none;
        text-align: right;
        padding-right: 5px;
        font-size: 16px;
    }
    button{
        color:#FFFFFF;
        background: linear-gradient(270deg, #F45C1E 0%, #F3711C 47%, #F3821E 97.03%);        
        border:none;
        height: 48px;
        margin-top:36px;
        font-size: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

`