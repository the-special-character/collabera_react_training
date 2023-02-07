import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';

function Register() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;

      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      console.log(json);
      actions.resetForm();
      navigate('/dashboard', { replace: true });
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  };

  return (
    <CustomForm
      initialValues={registerInitialValues}
      onSubmit={onSubmit}
      fields={registerFields}
      btnText="Sign in"
    />
  );
}

export default Register;
