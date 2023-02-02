import React, { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const filterBtns = [
  {
    text: 'All',
    value: 'all',
  },
  {
    text: 'Pending',
    value: 'pending',
  },
  {
    text: 'Completed',
    value: 'completed',
  },
];

function TodoFilter({ setFilterType, filterType }) {
  // console.log('TodoFilter render');
  // throw new Error('Todo filter crash');
  return (
    <div className="w-full flex">
      {filterBtns.map(x => (
        <button
          key={x.value}
          type="button"
          className={clsx('btn flex-1', {
            'btn--active': filterType === x.value,
          })}
          onClick={() => setFilterType(x.value)}
        >
          {x.text}
        </button>
      ))}
    </div>
  );
}

TodoFilter.propTypes = {
  setFilterType: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
};

export default memo(TodoFilter);
