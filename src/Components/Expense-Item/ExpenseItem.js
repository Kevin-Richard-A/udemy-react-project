import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expense-Date/ExpenseDate";

function ExpenseItem(props) {
  const { date, title, amount } = props;

  return (
    <div className="ExpenseItem">
      <div className="Date">
        <ExpenseDate date={date}/>
      </div>
      <div className="Description">
        <h2 className="Title">{title}</h2>
        <div className="Amount">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
