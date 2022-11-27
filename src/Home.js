import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import Product from "./components/Product";
import {LoginContext} from "./contexts/AuthProvider.js";
import carrinhoDeCompras from"./assets/carrinho.svg";
import logo from"./assets/logo.svg";
import home from "./assets/home.svg"
import logout from"./assets/logout.svg";


export default function Home (){
  const [products, setProducts]= useState([]);
  const {token} = useContext(LoginContext);
  
  useEffect (()=>{
    axios.get("http://localhost:5000/products", {
      headers: {
        Authorization: token
      }
    }).then(response=>{
      setProducts(response.data);
    }).catch((erro)=>{
      console.log(erro);
    })
  }, []);

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
        {
          products.map((product, index) => {
            return (
              <Product
                key={index}
                id={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                img={product.img}
              />
            )
          })
        }
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
  </>);
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
    text-decoration: none;
    width: 117px;
    height: 145px;
    margin-bottom: 70px;
  img{
    width: 100%;
  }
  .name-item{
    color: #000;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .preco{
    color:#F45C1E;
    font-size:16px;
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