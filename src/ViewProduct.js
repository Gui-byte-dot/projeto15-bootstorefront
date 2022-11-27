import styled from "styled-components"
import { useState} from "react";
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';

import carrinhoDeCompras from"./assets/carrinho.svg";
import logo from"./assets/logo.svg";
import roupa from "./assets/roupa.png";
import home from "./assets/home.svg"
import logout from"./assets/logout.svg";

const currencyBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ViewProduct (){
  const location = useLocation();
  const {
    id,
    name,
    price,
    description,
    img,
  } = location.state;

  return(<>
   <StyledContainer>
      <StyledHeader>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="carrinho">
          <img src={carrinhoDeCompras} alt="carrinho de compras" />
        </div>
      </StyledHeader>
      <StyledMain>
        <div className="containershop">
          <div className="roupa">
            <img src={img} alt="roupa"></img>
          </div>
          <p className="name">{name}</p>
          <p className="preco">{currencyBRL.format(price)}</p>
          <p>{description}</p>
        </div>
      </StyledMain>
      <StyledButtons>
        <Link to="/carrinho" className="link">
          <button>Colocar no carrinho</button>
        </Link>
      </StyledButtons>
      <Styledfooter>
        <div className="logo">
          <img src={home} alt="logo" />
        </div>
        <div className="carrinho">
          <img src={logout} alt="carrinho de compras" />
        </div>
      </Styledfooter>
    </StyledContainer>
  </>)
}

const StyledContainer= styled.div`
font-family: 'Roboto', sans-serif;
`
const StyledHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
background-color: #FC300A;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  .logo, .carrinho{
    width: 33px;
    height: 35px;
    img{
      width: 100%;
    }
  }
`
const StyledMain = styled.div`
display:flex;
padding: 30px 40px;
align-items: center;
justify-content:space-between;
flex-wrap: wrap;


  .containershop{
    margin-bottom: 70px;
    width: 331;
    height: 400px;
    img{
      width: 100%;
    }
  }
  .name{
    margin-top: 40px;
    font-size: 32px;
    margin-bottom: 4px;
    }
  .preco{
    color:#F45C1E;
    font-size: 32px;
    }
  
`
const StyledButtons= styled.div`
display: flex;
align-items: center;
margin-top: 36px;


button{
color:#FFFFFF;
background: linear-gradient(270deg, #F45C1E 0%, #F3711C 47%, #F3821E 97.03%);        
border:none;
width: 303px;
height: 48px;
font-size: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
}

`
const Styledfooter = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
background-color: #FC300A;
background: linear-gradient(270deg, #F45C1E 0%, #F3711C 47%, #F3821E 97.03%);  
position:fixed;
bottom: 0;
width: 100%;
  .logo, .carrinho{
    width: 33px;
    height: 35px;
    img{
      width: 100%;
    }
  }
`