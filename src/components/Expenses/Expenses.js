import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const expense = props.items.map((item) => (
    <ExpenseItem
      title={item.title}
      amount={item.amount}
      date={item.date}
      key={item.id}
    />
  ));
  // first elementは現在のstateの値。second elementは更新する値
  const [filteredYear, setFilteredYear] = useState("2020");

  console.log(filteredYear)
  const filterWithPickedyear = (clickedyear) => {
    setFilteredYear(clickedyear);
    return filteredYear;
  };
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onClickPickyear={filterWithPickedyear}
        />
        {expense}
      </Card>
    </div>
  );
};

export default Expenses;
