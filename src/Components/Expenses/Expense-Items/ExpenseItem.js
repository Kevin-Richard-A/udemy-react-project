import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expense-Date/ExpenseDate";
import Card from "../../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="ExpenseItem">
        <div className="Date">
          <ExpenseDate date={props.date} />
        </div>
        <div className="Description">
          <h2 className="Title">{props.title}</h2>
          <div className="Amount">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
