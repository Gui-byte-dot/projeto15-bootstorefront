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
                <div className="logo-wrapper">
                    <div className="logo">
                        <img src="carrinho.png" alt="carrinho" />
                    </div>
                </div>
                <p>Login</p>
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

const Signup = styled.form`
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