import React, { forwardRef } from 'react';
import clsx from 'clsx';

const Input = forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      type,
      id,
      autoComplete,
      placeholder,
      error,
      className,
    },
    ref,
  ) => (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        className={clsx(
          'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          { [className || '']: !!className },
        )}
        ref={ref}
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  ),
);

export default Input;
