import React from 'react';
import './item-status-filter.css'
const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = isActive ? 'button-active' : 'button';

    return (
      <div key={name}
          
              onClick={() => onFilterChange(name)}
              className={classNames}>{label}</div>
    );
  });

  return (
    <div className='all-buttons'>
      { buttons }
    </div>
  );
};

export default ItemStatusFilter;
