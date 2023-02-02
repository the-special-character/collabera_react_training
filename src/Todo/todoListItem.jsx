import clsx from 'clsx';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TodoContext } from '../contexts/todoContext';

function TodoListItem({ item }) {
  // console.log('Todo Item Render');
  return (
    <div key={item.id} className="flex items-center m-4">
      <TodoContext.Consumer>
        {({ toggleComplete, getRequestStatus }) => (
          <input
            type="checkbox"
            checked={item.isDone}
            disabled={getRequestStatus({ type: 'UPDATE_TODO', id: item.id })}
            className="disabled:accent-slate-400 disabled:cursor-wait"
            onChange={() => toggleComplete(item)}
          />
        )}
      </TodoContext.Consumer>
      <p
        className={clsx('flex-1 px-4', {
          'line-through': item.isDone,
        })}
        // style={{
        //   textDecoration: item.isDone
        //     ? 'line-through'
        //     : 'none',
        // }}
      >
        {item.text}
      </p>
      <TodoContext.Consumer>
        {({ deleteTodo, getRequestStatus }) => (
          <button
            type="button"
            disabled={getRequestStatus({ type: 'DELETE_TODO', id: item.id })}
            className="btn"
            onClick={() => deleteTodo(item)}
          >
            Delete
          </button>
        )}
      </TodoContext.Consumer>
    </div>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
};

export default memo(TodoListItem);
