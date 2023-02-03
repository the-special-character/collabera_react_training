import React from // useRef, // useState, // useEffect,
// memo,
// useMemo,
// useCallback,
'react';
import Todo from './Todo';
import ErrorBoundary from './ErrorBoundary';
import LocaleProvider from './contexts/localeContext';
import { TodoProvider } from './contexts/todoContext';

// clousure

// function Child1({ user, increment, decrement }) {
//   console.log('Child 1 Render');
//   return (
//     <div>
//       <h1>Child 1 Component</h1>
//       <p>{user.name}</p>

//       <button type="button" className="btn" onClick={increment}>
//         +
//       </button>
//       <button type="button" className="btn" onClick={decrement}>
//         -
//       </button>
//     </div>
//   );
// }

// const Child1Memo = memo(Child1);

// All Life Cycle methods are not possible
// function Test() {
//   const [counter, setCounter] = useState(0);
//   // const [user, setUser] = useState({ name: 'Virat', age: 30 });
//   const isMounted = useRef(false);

//   // Non-Primitive Type of data
//   // useCallback is used for function
//   const increment = useCallback(() => {
//     setCounter(val => val + 1);
//   }, []);

//   const decrement = useCallback(() => {
//     setCounter(val => val - 1);
//   }, []);

//   // Non-Primitive Type of data
//   // const user = { name: 'Virat', age: 30 };

//   // Memorize this object
//   // Use Memo is only use for object/array
//   const user = useMemo(() => ({ name: 'Yagnesh', age: 33 }), []);

//   // const changeName = () => {
//   //   setUser({ name: 'Yagnesh', age: 33 });
//   // };

//   // ComponentDidMount
//   // ComponentDidUpdate
//   // Note: Never use useEffect without second parameter
//   // useEffect(() => {
//   //   console.log('Use effect Called');

//   //   // ComponentWillUnmount
//   //   return () => {};
//   // }, []);

//   // Component Did Mount
//   // Component Did Update
//   useEffect(() => {
//     if (isMounted.current) {
//       // console.log('Component Did Update');
//     }
//   }, [counter, user]);

//   // Component Did Mount
//   useEffect(() => {
//     // console.log('Component Did Mount');
//     isMounted.current = true;
//   }, []);

//   console.log('Test Render');
//   return (
//     <>
//       <div>
//         <button type="button" className="btn" onClick={increment}>
//           +
//         </button>
//         <p>{counter}</p>
//         <button type="button" className="btn" onClick={decrement}>
//           -
//         </button>
//       </div>
//       <div>
//         <h2>{`Name: ${user.name}`}</h2>
//         <h2>{`Age: ${user.age}`}</h2>
//       </div>
//       <div>
//         <Child1Memo user={user} increment={increment} decrement={decrement} />
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <ErrorBoundary>
      <LocaleProvider>
        <TodoProvider>
          {/* <Test /> */}
          <Todo />
        </TodoProvider>
      </LocaleProvider>
    </ErrorBoundary>
  );
}

export default App;
