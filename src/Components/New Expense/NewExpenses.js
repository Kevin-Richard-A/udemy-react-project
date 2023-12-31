import React, { useState } from "react";
import Form from "./ExpenseForm/Form";
import "./NewExpenses.css";

const NewExpenses = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenses(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="newExpense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <Form onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpenses;
