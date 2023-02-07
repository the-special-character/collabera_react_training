import React from 'react';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';
import { useAuthContext } from '../../context/authContext';

function Register() {
  const { register } = useAuthContext();

  return (
    <CustomForm
      initialValues={registerInitialValues}
      onSubmit={register}
      fields={registerFields}
      btnText="Sign in"
    />
  );
}

export default Register;
