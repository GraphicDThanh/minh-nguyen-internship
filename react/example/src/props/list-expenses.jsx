import React from 'react';
import ExpenseItem from './expense-item';

function ListExpenses(props) {
  const { data } = props;

  return (
    <div>
      <ExpenseItem item={data[0]} />
      <ExpenseItem item={data[1]} />
      <ExpenseItem item={data[2]} />
      <ExpenseItem item={data[3]} />
    </div>
  );
}

export default ListExpenses;
