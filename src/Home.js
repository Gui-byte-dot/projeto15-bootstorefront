import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import Product from "./components/Product";
import {LoginContext} from "./contexts/AuthProvider.js";
import Container from "./components/Container";


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
    <>
      <Container>
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
      </Container>
    </>
  </>);
}

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