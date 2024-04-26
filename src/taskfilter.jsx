import React from 'react';

const TaskFilter = ({ onFilterChange }) => {
  return (
    <div className="filter-container">
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('completed')}>Completed</button>
      <button onClick={() => onFilterChange('incomplete')}>Incomplete</button>
    </div>
  );
};

export default TaskFilter;
