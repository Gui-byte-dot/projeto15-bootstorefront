import carrinhoDeCompras from"./assets/carrinho.svg";
import seta from"./assets/seta.svg";
import roupa from "./assets/roupa.svg";
import home from "./assets/home.svg"
import logout from"./assets/logout.svg";

import styled from "styled-components";
import { useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Carrinho (){
  return(<>
    <StyledContainer>
      <StyledHeader>
        <Link to="/home">
          <div className="seta">
          <img src={seta} alt="seta" />
          </div>
        </Link>
        <div className="carrinho">
          <img src={carrinhoDeCompras} alt="carrinho de compras" />
        </div>
      </StyledHeader>
      <StyledMain>
        <StyleCardProduct>
          <div className="descricoesproduto">
            <p className="descriçãoroupa">Calça Jogger</p>
            <p className="preco">39,90</p>
          </div>
          <div className="roupa">
            <img src={roupa} alt="roupa"></img>
          </div>
        </StyleCardProduct>
      </StyledMain>
      <StyledButtons>
        <Link>
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
  .seta, .carrinho{
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
flex-direction: column;
`
const StyleCardProduct = styled.div`
background-color: #f8f8;
display: flex;
width: 100%;
border-radius:5px;
flex-direction: row;
margin-bottom: 20px;
justify-content:space-between;
padding: 10px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  .roupa{
    width: 83px;
    height: 101px;

    img{
    width: 100%;
  }
  }

  .descricoesproduto{
    .descriçãoroupa{
      font-size: 24px;
      margin-bottom: 50px;
    }
    .preco{
      color:#F45C1E;
      font-size:22px;
    }
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
align-items: center;
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