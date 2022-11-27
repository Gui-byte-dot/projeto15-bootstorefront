import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import Product from './Product';

import {AuthProvider} from "./auth"


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/sign-up" element={<Cadastro />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

