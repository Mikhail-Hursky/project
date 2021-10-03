import React, {useState} from 'react';
import {Button, Container, Form} from "semantic-ui-react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Logo from "../../svg/Logo";
import RegForm from "./RegForm";
import LoginForm from "./LoginForm";
import './AuthForm.scss'

const AuthForm = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <Container textAlign='center'>
      <h1 className='logo'><Logo/> Champions</h1>
      <div className='authForm'>
        <h2>{isRegistration ? 'Registration' : 'Login'}</h2>
        {isRegistration ? (<RegForm/>) : (<LoginForm/>)}
        <Button
          className='btnSwitch'
          color='orange'
          onClick={() => setIsRegistration(prev => !prev)}
        >
          {!isRegistration ? 'Registration new account' : 'Sign up'}
        </Button>
      </div>
    </Container>
  )
}

export default AuthForm;