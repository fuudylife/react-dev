import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"

const Expenses = (props) => {
  const expense = props.items.map((item, index) => (
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={index}/>
  ));
  return (
    <Card className="expenses">
      {expense}
    </Card>
  );
}

export default Expenses;
