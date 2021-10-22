import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegForm = () => {
  const formikReg = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Required to fill'),
      email: Yup.string()
        .matches(/@/, 'Incorrect email')
        .required('Required to fill'),
      password: Yup.string()
        .min(6, '6 to 16 characters')
        .required('Required to fill'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Form onSubmit={formikReg.handleSubmit}>
        <Form.Field>
          <Form.Input
            name="name"
            label="Enter your name"
            type="text"
            value={formikReg.values.name}
            onChange={formikReg.handleChange}
            error={formikReg.errors.name}
            onBlur={() => formikReg.validateField('name')}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="email"
            label="Enter your email"
            type="email"
            value={formikReg.values.email}
            onChange={formikReg.handleChange}
            error={formikReg.errors.email}
            onBlur={() => formikReg.validateField('email')}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="password"
            label="Enter your Password"
            type="password"
            value={formikReg.values.password}
            onChange={formikReg.handleChange}
            error={formikReg.errors.password}
            onBlur={() => formikReg.validateField('password')}
          />
        </Form.Field>
        <Button primary type="submit">
          Registration
        </Button>
      </Form>
    </>
  );
};

export default RegForm;
