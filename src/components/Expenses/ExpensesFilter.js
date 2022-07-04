import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const clickHnadler = (event) => {
    //クリックされた値を返すだけ
    props.onClickPickyear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={clickHnadler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2022">2021</option>
          <option value="2022">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
