import clsx from 'clsx';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LocaleContext } from '../contexts/localeContext';

function TodoListItem({
  item,
  toggleComplete,
  deleteTodo,
  updateStatus,
  deleteStatus,
}) {
  // console.log('Todo Item Render');
  return (
    <div key={item.id} className="flex items-center m-4">
      <LocaleContext.Consumer>
        {value => <p>{value.locale}</p>}
      </LocaleContext.Consumer>

      <input
        type="checkbox"
        checked={item.isDone}
        disabled={updateStatus?.action === 'REQUEST'}
        className="disabled:accent-slate-400 disabled:cursor-wait"
        onChange={() => toggleComplete(item)}
      />
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
      <button
        type="button"
        disabled={deleteStatus?.action === 'REQUEST'}
        className="btn"
        onClick={() => deleteTodo(item)}
      >
        Delete
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.shape({
    type: PropTypes.string,
    action: PropTypes.oneOf(['REQUEST', 'ERROR']),
    errorMessage: PropTypes.string,
    id: PropTypes.number,
  }),
  deleteStatus: PropTypes.shape({
    type: PropTypes.string,
    action: PropTypes.oneOf(['REQUEST', 'ERROR']),
    errorMessage: PropTypes.string,
    id: PropTypes.number,
  }),
};

TodoListItem.defaultProps = {
  updateStatus: undefined,
  deleteStatus: undefined,
};

export default memo(TodoListItem);
