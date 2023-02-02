import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todoListItem';

function TodoList({
  todoList,
  toggleComplete,
  deleteTodo,
  updateStatus,
  deleteStatus,
}) {
  return (
    <>
      {todoList.map(item => (
        <TodoListItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          updateStatus={updateStatus.find(x => x.id === item.id)}
          deleteStatus={deleteStatus.find(x => x.id === item.id)}
        />
      ))}
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,

  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteStatus: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      action: PropTypes.oneOf(['REQUEST', 'ERROR']),
      errorMessage: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  updateStatus: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      action: PropTypes.oneOf(['REQUEST', 'ERROR']),
      errorMessage: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default memo(TodoList);
