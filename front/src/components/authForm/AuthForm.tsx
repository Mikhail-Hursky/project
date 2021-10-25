import React, { useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import Logo from '../logo/Logo';
import './AuthForm.scss';

const AuthForm = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <Container textAlign="center">
      <Logo />
      <div className="authForm">
        <h2>{isRegistration ? 'Registration' : 'Login'}</h2>
        {isRegistration ? <RegForm /> : <LoginForm />}
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
