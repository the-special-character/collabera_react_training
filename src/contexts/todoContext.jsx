import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import useAppStatus from '../hooks/useAppStatus';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const todoTextRef = useRef(null);
  const { appStatus, loadStatus, errorStatus, successStatus } = useAppStatus();

  const loadTodo = useCallback(
    async ft => {
      const type = 'LOAD_TODO';
      try {
        loadStatus({ type });
        let url = 'http://localhost:3000/todoList';

        if (ft !== 'all') {
          url += `?isDone=${ft === 'completed'}`;
        }

        const res = await fetch(url);
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json);
        }

        setTodoList(json);
        setFilterType(ft);
        successStatus({ type });
      } catch (error) {
        errorStatus({ type, error });
      }
    },
    [loadStatus, successStatus, errorStatus],
  );

  const addTodo = useCallback(
    async event => {
      const type = 'ADD_TODO';
      try {
        loadStatus({ type });
        event.preventDefault();

        const todoText = todoTextRef.current.value;

        const res = await fetch('http://localhost:3000/todoList', {
          method: 'POST',
          body: JSON.stringify({
            text: todoText,
            isDone: false,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json);
        }

        setTodoList(val => [...val, json]);

        todoTextRef.current.value = '';

        successStatus({ type });
      } catch (error) {
        errorStatus({ type, error });
      }
    },
    [loadStatus, successStatus, errorStatus],
  );

  const updateTodo = useCallback(
    async item => {
      const type = 'UPDATE_TODO';
      try {
        loadStatus({ type, id: item.id });
        const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
          method: 'PUT',
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json);
        }

        setTodoList(val => {
          const index = val.findIndex(x => x.id === item.id);
          return [...val.slice(0, index), json, ...val.slice(index + 1)];
        });

        successStatus({ type, id: item.id });
      } catch (error) {
        errorStatus({ type, error, id: item.id });
      }
    },
    [loadStatus, successStatus, errorStatus],
  );

  const deleteTodo = useCallback(
    async item => {
      const type = 'DELETE_TODO';
      try {
        loadStatus({ type, id: item.id });
        const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
          method: 'DELETE',
        });

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json);
        }

        setTodoList(val => {
          const index = val.findIndex(x => x.id === item.id);
          return [...val.slice(0, index), ...val.slice(index + 1)];
        });

        successStatus({ type, id: item.id });
      } catch (error) {
        errorStatus({ type, error, id: item.id });
      }
    },
    [loadStatus, successStatus, errorStatus],
  );

  const getRequestStatus = useCallback(
    ({ type, id = -1 }) =>
      appStatus.find(
        x => x.type === type && x.action === 'REQUEST' && x.id === id,
      ),
    [appStatus],
  );

  const getErrorStatus = useCallback(
    ({ type, id = -1 }) =>
      appStatus.find(
        x => x.type === type && x.action === 'ERROR' && x.id === id,
      ),
    [appStatus],
  );

  useEffect(() => {
    loadTodo('all');
  }, [loadTodo]);

  const value = useMemo(
    () => ({
      todoList,
      appStatus,
      filterType,
      todoTextRef,
      loadTodo,
      addTodo,
      updateTodo,
      deleteTodo,
      getRequestStatus,
      getErrorStatus,
    }),
    [
      todoList,
      appStatus,
      filterType,
      loadTodo,
      addTodo,
      deleteTodo,
      getErrorStatus,
      getRequestStatus,
      updateTodo,
    ],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export const useTodo = () => useContext(TodoContext);

TodoProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

// export default class TodoProvider extends Component {
//   state = {
//     todoList: [],
//     appStatus: [],
//     filterType: 'all',
//   };

//   todoText = createRef();

//   async componentDidMount() {
//     this.loadTodo('all');
//   }

//   loadStatus = ({ type, id = -1 }) => {
//     this.setState(({ appStatus }) => ({
//       appStatus: [...appStatus, { type, action: 'REQUEST', id }],
//     }));
//   };

//   errorStatus = ({ type, id = -1, error }) => {
//     this.setState(({ appStatus }) => ({
//       appStatus: appStatus.map(x => {
//         if (x.type === type && x.id === id) {
//           return { ...x, action: 'ERROR', errorMessage: error.message };
//         }
//         return x;
//       }),
//     }));
//   };

//   successStatus = ({ type, id = -1 }) => {
//     this.setState(({ appStatus }) => ({
//       appStatus: appStatus.filter(x => !(x.type === type && x.id === id)),
//     }));
//   };

//   loadTodo = async filterType => {
//     const type = 'LOAD_TODO';
//     try {
//       this.loadStatus({ type });
//       let url = 'http://localhost:3000/todoList';

//       if (filterType !== 'all') {
//         url += `?isDone=${filterType === 'completed'}`;
//       }

//       const res = await fetch(url);
//       const json = await res.json();

//       if (!res.ok) {
//         throw new Error(json);
//       }

//       this.setState({ todoList: json, filterType });
//       this.successStatus({ type });
//     } catch (error) {
//       this.errorStatus({ type, error });
//     }
//   };

//   getRequestStatus = ({ type, id = -1 }) => {
//     const { appStatus } = this.state;

//     return appStatus.find(
//       x => x.type === type && x.action === 'REQUEST' && x.id === id,
//     );
//   };

//   getErrorStatus = ({ type, id = -1 }) => {
//     const { appStatus } = this.state;

//     return appStatus.find(
//       x => x.type === type && x.action === 'ERROR' && x.id === id,
//     );
//   };

//   addTodo = async event => {
//     const type = 'ADD_TODO';
//     try {
//       this.loadStatus({ type });
//       event.preventDefault();

//       const todoText = this.todoText.current.value;

//       const res = await fetch('http://localhost:3000/todoList', {
//         method: 'POST',
//         body: JSON.stringify({
//           text: todoText,
//           isDone: false,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();

//       if (!res.ok) {
//         throw new Error(json);
//       }

//       this.setState(
//         ({ todoList }) => ({
//           todoList: [...todoList, json],
//         }),
//         () => {
//           this.todoText.current.value = '';
//         },
//       );
//       this.successStatus({ type });
//     } catch (error) {
//       this.errorStatus({ type, error });
//     }
//   };

//   toggleComplete = async item => {
//     const type = 'UPDATE_TODO';
//     try {
//       this.loadStatus({ type, id: item.id });
//       const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(item),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();

//       if (!res.ok) {
//         throw new Error(json);
//       }

//       this.setState(({ todoList }) => {
//         // O(logN)
//         const index = todoList.findIndex(x => x.id === item.id);
//         return {
//           todoList: [
//             ...todoList.slice(0, index),
//             json,
//             ...todoList.slice(index + 1),
//           ],
//         };
//       });
//       this.successStatus({ type, id: item.id });
//     } catch (error) {
//       this.errorStatus({ type, error, id: item.id });
//     }
//   };

//   deleteTodo = async item => {
//     const type = 'DELETE_TODO';
//     try {
//       this.loadStatus({ type, id: item.id });
//       const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'DELETE',
//       });

//       const json = await res.json();

//       if (!res.ok) {
//         throw new Error(json);
//       }

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === item.id);
//         return {
//           todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//         };
//       });
//       this.successStatus({ type, id: item.id });
//     } catch (error) {
//       this.errorStatus({ type, error, id: item.id });
//     }
//   };

//   render() {
//     const { children } = this.props;
//     const { todoList, filterType } = this.state;

//     return (
//       <TodoContext.Provider
//         value={{
//           loadTodo: this.loadTodo,
//           addTodo: this.addTodo,
//           toggleComplete: this.toggleComplete,
//           deleteTodo: this.deleteTodo,
//           todoList,
//           filterType,
//           todoText: this.todoText,
//           getRequestStatus: this.getRequestStatus,
//           getErrorStatus: this.getErrorStatus,
//         }}
//       >
//         {children}
//       </TodoContext.Provider>
//     );
//   }
// }
