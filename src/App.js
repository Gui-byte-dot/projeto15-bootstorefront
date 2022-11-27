import { useContext } from 'react';
import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import ViewProduct from './ViewProduct';
import Carrinho from './Carrinho';
import { LoginContext } from './contexts/AuthProvider.js';

const PrivateRoute = ({ Component }) => {
  const {logado} = useContext(LoginContext);

  return logado ? <Component /> : <Login />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/sign-up" element={<Cadastro />}/>
      <Route path="/home" element={<PrivateRoute Component={Home}/>}/>
      <Route path="/product" element={<PrivateRoute Component={ViewProduct}/>}/>
      <Route path="/carrinho" element={<PrivateRoute Component={Carrinho}/>}/>
    </Routes>
  );
}

