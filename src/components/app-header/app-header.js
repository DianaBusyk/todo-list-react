import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header">
      <span className='title'>Todo List</span>
      <span className='howMuch'>{toDo} more to do, {done} done</span>
    </div>
  );
};

export default AppHeader;
