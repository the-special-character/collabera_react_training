import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      setUser(json);
      localStorage.setItem('token', JSON.stringify(json));
      actions.resetForm();
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  }, []);

  const register = useCallback(async (values, actions) => {
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
      actions.resetForm();
      setUser(json);
      localStorage.setItem('token', JSON.stringify(json));
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);

  const value = useMemo(
    () => ({
      login,
      register,
      logout,
      user,
    }),
    [login, register, logout, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
