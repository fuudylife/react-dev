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

  const filterWithPickedyear = (clickedyear) => {
    setFilteredYear(clickedyear);
  };

  const filteredExpenses = expense.filter((item) => {
    return item.props.date.getFullYear().toString() === filteredYear;
  });

  // JSXコンテンツを変数に格納することができます。
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onClickPickyear={filterWithPickedyear}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
