import React from 'react'
import Form from './ExpenseForm/Form'
import './NewExpenses.css';

const NewExpenses = (props) => {
  
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.addExpenses(expenseData);  
  }

  return (
    <div className='newExpense'>
        <Form  onSaveExpenseData={saveExpenseData} />
    </div>
  )
}

export default NewExpenses