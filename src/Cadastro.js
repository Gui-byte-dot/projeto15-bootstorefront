import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";



export default function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    function cadastrar(event){
        event.preventDefault();
        const requisicao = axios.post("http://localhost:5000/sign-up",{
            name,
            email,
            password
        })
        
        requisicao.then(response => {
            navigate('/');
            console.log(response.data)
        })
        requisicao.catch(err => {
            console.log(err);
        })
    }


    return (
        <>
            <Header>
                <img src="carrinho.png" alt="carrinho" />
                <p>Register</p>
            </Header>
            <Signup onSubmit={cadastrar}>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}></input>
                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Cadastrar</button>
            </Signup>
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
const Signup = styled.form`
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