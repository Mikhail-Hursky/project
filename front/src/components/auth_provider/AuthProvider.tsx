import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthPage from '../../pages/authPage/AuthPage';
import { COLLECTION } from '../../Constants';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/store';

interface Props {
  children: JSX.Element;
}

const AuthProvider = ({ children }: Props) => {
  const isAuth = useSelector((state: IRootReducer) => state.user.token);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push(
        history.location.pathname === '/'
          ? COLLECTION
          : history.location.pathname
      );
    }
  }, [isAuth]);

  return <>{isAuth ? children : <AuthPage />}</>;
};

export default AuthProvider;
