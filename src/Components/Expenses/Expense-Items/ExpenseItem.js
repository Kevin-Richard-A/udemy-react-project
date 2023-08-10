import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expense-Date/ExpenseDate";
import Card from "../../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const changeTitle = () => {
  //   setTitle("Updated!!!")
  // }

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
        {/* <button onClick={changeTitle}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
