import React from 'react'
import './Expenses.css'
import ExpenseItem from '../Expense-Item/ExpenseItem'

function Expenses(props) {
    const {expenses} = props;
    var row = [];
    for (const i in expenses) {
      row.push(
        <ExpenseItem
          id={expenses[i].id}
          title={expenses[i].title}
          amount={expenses[i].amount}
          date={expenses[i].date}
        />
      );
    }
  return (
    <div className='expenses'>
      {row}    
    </div>
  )
}

export default Expenses