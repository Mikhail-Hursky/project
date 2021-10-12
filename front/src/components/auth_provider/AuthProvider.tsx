import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import AuthPage from "../../pages/auth_page/AuthPage";

interface Props {
  children: JSX.Element
}


const AuthProvider = ({children} : Props) => {
  const [isAuth] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push(history.location.pathname === '/' ? '/collection' : history.location.pathname)
    }
  },[isAuth])
  
  return (
    <>
      {isAuth ? (children) : (<AuthPage/>)}
    </>
  )
};

export default AuthProvider;