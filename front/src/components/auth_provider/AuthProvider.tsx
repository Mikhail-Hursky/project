import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import AuthPage from "../../pages/auth_page/AuthPage";
import {COLLECTION} from "../../Constants";

interface Props {
  children: JSX.Element
}


const AuthProvider = ({children} : Props) => {
  const [isAuth] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push(history.location.pathname === '/' ? COLLECTION : history.location.pathname)
    }
  },[isAuth])
  
  return (
    <>
      {isAuth ? (children) : (<AuthPage/>)}
    </>
  )
};

export default AuthProvider;