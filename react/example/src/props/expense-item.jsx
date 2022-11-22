import React from 'react';
import ExpenseDate from './expense-date';

function ExpenseItem(props) {
  const { date } = props.item;
  const { title } = props.item;
  const { amount } = props.item;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
