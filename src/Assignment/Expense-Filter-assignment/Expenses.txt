import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "../Expense-Items/ExpenseItem";
import Card from "../../UI/Card";
import { ExpenseFilter } from "../Expense-Filter/ExpenseFilter";

function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }
  console.log(filteredYear);
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
