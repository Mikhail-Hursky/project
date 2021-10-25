import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../api/api';

interface Props {
  setIsLoader(isLoader: boolean): void;
}

const LoginForm = ({ setIsLoader }: Props) => {
  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .matches(/@/, 'Incorrect email')
        .required('Required to fill'),
      password: Yup.string()
        .min(6, '6 to 16 characters')
        .required('Required to fill')
    }),
    onSubmit: values => {
      setIsLoader(true);
      loginApi(values).then(() => {
        setIsLoader(false);
      });
    }
  });

  return (
    <>
      <Form onSubmit={formikLogin.handleSubmit}>
        <Form.Field>
          <Form.Input
            name="email"
            onChange={formikLogin.handleChange}
            value={formikLogin.values.email}
            label="Enter email"
            type="email"
            error={formikLogin.errors.email}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password"
            onChange={formikLogin.handleChange}
            value={formikLogin.values.password}
            label="Enter Password"
            type="password"
            error={formikLogin.errors.password}
          />
        </Form.Field>
        <Button primary type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
