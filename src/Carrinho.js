import styled from "styled-components";
import { useState, useContext, useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from "./contexts/AuthProvider.js";
import ProductCart from "./components/ProductCart.js";
import Alert from './Alert.js';

import Container from "./components/Container.js";

export default function Carrinho (){
  const navigate = useNavigate();
  const {token} = useContext(LoginContext);
  const [productsCart, setProducts]= useState([])
  const [openModal, setModal]= useState(false);
  const [enabledFinish, setEnabledFinish] = useState(false);


  useEffect (() => {
    axios.get("http://localhost:5000/cart",{
      headers:{
        Authorization: token
      }
    }).then(response=>{
      const products = response.data;
      setProducts(products)
      if(products?.length > 0) {
        setEnabledFinish(true)
      }
    }).catch((erro)=>{
      alert("erro ao obter lista do carrinho")
    })
  }, []);

  function purchase() {
    axios.post("http://localhost:5000/purchases", {
      products: productsCart,
    }, {headers: {Authorization: token}}
    ).then(response => {
      alert("Compra finalizada com sucesso")
      navigate("/home")
    }).catch((erro) => {
      alert("Erro ao finalizar compra");
    })
  }

  function confirmPurchase() {
    setModal(true);
  }

  
  return(<>
    {
        openModal ? (
          <Alert text={"Deseja finalizar a compra ?"} executeFunction={purchase} setModal={setModal} />
        ): <></>
      }
    <Container isNotHome>
      <StyledMain>
        {
          productsCart.map((product, index) => {
            return (
              <StyleCardProduct key={index}>
                <ProductCart name={product.name} price={product.price} img={product.img}/>
              </StyleCardProduct>
            )
          })
        }
        <button disabled={!enabledFinish} onClick={() => confirmPurchase()}>Finalizar Pedido</button>
        <Link to="/home" className="button">Continuar Comprando</Link>
      </StyledMain>
    </Container>
  </>)
}

const StyledMain = styled.div`
display:flex;
padding: 30px 40px;
flex-direction: column;

button, .button {
  color:#FFFFFF;
  background: linear-gradient(270deg, #F45C1E 0%, #F3711C 47%, #F3821E 97.03%);        
  border:none;
  height: 48px;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom:15px;
}
.button {
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
`
const StyleCardProduct = styled.div`
background-color: #ffff;
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
