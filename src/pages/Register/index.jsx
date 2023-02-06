import React from 'react';
import { Field, Formik, Form } from 'formik';
import { registerFields, registerInitialValues } from './registerFields';

function Register() {
  return (
    <Formik
      initialValues={registerInitialValues}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            {registerFields.map(item => (
              <Field key={item.name} {...item} />
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
