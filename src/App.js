import { useState } from "react";
import "./App.css";
import NewExpenses from "./Components/New Expense/NewExpenses";
import Expenses from "./Components/Expenses/Expenses-main/Expenses";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Laptop",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "PS5",
    amount: 490,
    date: new Date(2023, 7, 15),
  },
  {
    id: "e6",
    title: "Mobile",
    amount: 350,
    date: new Date(2023, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(Dummy_Expenses)

  const submitedExpensesData = (data) =>{
    setExpenses(preExpenses => {
      return [data, ...preExpenses]
    })
  }
  console.log(expenses);

  return <div className="App">
      <NewExpenses addExpenses={submitedExpensesData}/>
      <Expenses item={expenses} />
  </div>;
}

export default App;
