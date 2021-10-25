import React, { useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Spin } from 'antd';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import Logo from '../logo/Logo';
import './AuthForm.scss';

const AuthForm = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  return (
    <Container textAlign="center">
      {isLoader && (
        <div className="loader">
          <Spin size="large" />
        </div>
      )}
      <Logo />
      <div className="authForm">
        <h2>{isRegistration ? 'Registration' : 'Login'}</h2>
        {isRegistration ? (
          <RegForm setIsLoader={setIsLoader} />
        ) : (
          <LoginForm setIsLoader={setIsLoader} />
        )}
        <Button
          className="btnSwitch"
          color="orange"
          onClick={() => setIsRegistration(prev => !prev)}
        >
          {isRegistration ? 'Sign up' : 'Registration new account'}
        </Button>
      </div>
    </Container>
  );
};

export default AuthForm;
