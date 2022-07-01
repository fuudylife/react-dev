import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // first elementは現在のstateの値。second elementは更新する値
  const [title, setTitle] = useState(props.title);
  console.log("evaluated by react");

  const clickHnadler = () => {
    setTitle("Updated!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHnadler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
