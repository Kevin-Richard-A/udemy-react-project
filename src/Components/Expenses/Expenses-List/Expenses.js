import React from "react";
import "./Expenses.css";
import ExpenseItem from "../Expense-Items/ExpenseItem";
import Card from "../../UI/Card";

function Expenses(props) {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map( expense => 
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </Card>
  );
}

export default Expenses;
