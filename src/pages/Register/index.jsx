import React from 'react';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

function Register() {
  const onSubmit = async values => {
    await wait(3000);
    console.log(values);
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
