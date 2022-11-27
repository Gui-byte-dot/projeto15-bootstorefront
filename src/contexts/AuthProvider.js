import React, {createContext, useState, useEffect, } from "react";

const LoginContext = createContext();

function AuthProvider({children}){
  const [token, setTokenUser] = useState("");
  const [logado, setLogado] = useState(false);

  function setToken(token) {
    setTokenUser(token);
    localStorage.setItem('token', token);
  }

  useEffect(() => {
    if(token === "") {
      const tokenDoLocalStorage = localStorage.getItem("token");
      if(!tokenDoLocalStorage) {
        setLogado(false)
      }else {
        setLogado(true)
        setToken(tokenDoLocalStorage)
      }
    }
    
  }, [logado, token])


    return(
        <LoginContext.Provider value={
          {
            token,
            setToken,
            logado,
            setLogado,
          }
        }>
            {children}
        </LoginContext.Provider>
    )
}
export { LoginContext, AuthProvider }