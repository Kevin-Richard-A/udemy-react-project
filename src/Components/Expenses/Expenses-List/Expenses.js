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
  
  let filterInfoText = '2019, 2020, 2021, 2022';
  if(filteredYear === '2022'){
    filterInfoText= '2019, 2020, 2021, 2023';
  } else if(filteredYear === '2021') {
    filterInfoText= '2019, 2020, 2022, 2023';
  } else if(filteredYear === '2020') {
    filterInfoText= '2019, 2021, 2022, 2023';
  } else if(filteredYear === '2019') {
    filterInfoText= '2020, 2021, 2022, 2023';
  } else {
    filterInfoText= '2019, 2020, 2021, 2022';
  }
  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filterInfoText+ ' check'}
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
