import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        {/* <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required...',
          }}
          render={({ field }) => {
            console.log(field);
            return (
              <Input
                {...field}
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
                error={errors.email?.message}
                className="rounded-t-md"
              />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Email is required...',
          }}
          render={({ field }) => {
            console.log(field);
            return (
              <Input
                {...field}
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Password"
                error={errors.email?.message}
                className="rounded-b-md"
              />
            );
          }}
        /> */}
        <Input
          {...register('email', {
            required: 'Email is required',
          })}
          type="email"
          id="email"
          autoComplete="email"
          placeholder="Email"
          error={errors.email?.message}
          className="rounded-t-md"
        />
        <Input
          {...register('password', {
            required: 'Password is required',
          })}
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Password"
          error={errors.password?.message}
          className="rounded-b-md"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

export default Login;
