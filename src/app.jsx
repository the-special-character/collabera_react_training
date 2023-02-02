import React from 'react';
import Todo from './Todo';
import ErrorBoundary from './ErrorBoundary';
import LocaleProvider from './contexts/localeContext';

function App() {
  return (
    <ErrorBoundary>
      <LocaleProvider>
        <Todo />
      </LocaleProvider>
    </ErrorBoundary>
  );
}

export default App;
