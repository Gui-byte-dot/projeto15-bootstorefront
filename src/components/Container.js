import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import carrinhoDeCompras from"../assets/carrinho.svg";
import logo from"../assets/logo.svg";
import home from "../assets/home.svg"
import logoutIcon from"../assets/logout.svg";
import seta from"../assets/seta.svg";


export default function Container({ children, isNotHome=false }) {
  const navigate = useNavigate();
  
  function logout() {
    /// FAzer aqui o logout
  }

  return (
    <StyledContainer>
      <StyledHeader>
        {
          isNotHome ? (
            <div className="seta" onClick={() => navigate(-1)}>
              <img src={seta} alt="seta" />
            </div>
          ): (
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          )
        }
        <div className="carrinho" onClick={() => navigate("/carrinho")}>
          <img src={carrinhoDeCompras} alt="carrinho de compras" />
        </div>
      </StyledHeader>
      {children}
      <Styledfooter>
        <div className="logo" onClick={() => navigate("/home")}>
          <img src={home} alt="logo" />
        </div>
        
        <div className="logout" onClick={() => logout()}>
          <img src={logoutIcon} alt="logout" />
        </div>
      </Styledfooter>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
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

