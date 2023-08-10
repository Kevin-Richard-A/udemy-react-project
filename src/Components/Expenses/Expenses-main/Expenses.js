import React, { useState } from "react";
import "./Expenses.css";
import Card from "../../UI/Card";
import ExpenseList from "../Expense-List/ExpenseList";
import ExpenseFilter from "../Expense-Filter/ExpenseFilter";
import ExpensesChart from "../Expenses-Chart/ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
