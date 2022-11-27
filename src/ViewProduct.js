import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';

import carrinhoDeCompras from"./assets/carrinho.svg";
import home from "./assets/home.svg"
import logout from"./assets/logout.svg";
import seta from"./assets/seta.svg";

const currencyBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ViewProduct (){
  const location = useLocation();
  const navigate = useNavigate();
  const {
    id,
    name,
    price,
    description,
    img,
  } = location.state;

  function goToCart() {
    navigate("/carrinho")
  }

  return(<>
   <StyledContainer>
      <StyledHeader>
        <div className="seta" onClick={() => navigate(-1)}>
          <img src={seta} alt="seta" />
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
        <button onClick={() => goToCart()} className="link">Colocar no carrinho</button>
      </StyledMain>
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
justify-content:space-between;
flex-direction: column;

  .containershop{
    margin-bottom: 70px;
    height: 400px;
    .roupa{
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
  button{
    margin-top: 48px;
    height: 48px;
    color:#FFFFFF;
    background: linear-gradient(270deg, #F45C1E 0%, #F3711C 47%, #F3821E 97.03%);        
    border:none;
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