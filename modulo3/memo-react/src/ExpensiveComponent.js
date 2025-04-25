import React from 'react';

const ExpensiveComponent = React.memo(function({ data }) {
    return (
      <div>
        {data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  });
  

export default ExpensiveComponent;
