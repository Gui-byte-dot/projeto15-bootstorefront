import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import {AuthProvider} from "./auth"


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/sign-up" element={<Cadastro />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

