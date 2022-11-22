import React from 'react';

function ExpenseDate(props) {
  const day = props.date.toLocaleString();
  const month = props.date.toLocaleString();
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date-moth">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
