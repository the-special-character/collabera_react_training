import React from 'react';
import Todo from './Todo';
import ErrorBoundary from './ErrorBoundary';
import LocaleProvider from './contexts/localeContext';
import TodoProvider from './contexts/todoContext';

function App() {
  return (
    <ErrorBoundary>
      <LocaleProvider>
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </LocaleProvider>
    </ErrorBoundary>
  );
}

export default App;
