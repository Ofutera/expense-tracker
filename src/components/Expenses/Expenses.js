import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

  const [year, setYear] = useState('2021')

  const selectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };


  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onSelectedYear={selectedYearHandler} />
      <ExpenseItem
        title={props.expArray[0].title}
        amount={props.expArray[0].amount}
        date={props.expArray[0].date}
      />
      <ExpenseItem
        title={props.expArray[1].title}
        amount={props.expArray[1].amount}
        date={props.expArray[1].date}
      />
      <ExpenseItem
        title={props.expArray[2].title}
        amount={props.expArray[2].amount}
        date={props.expArray[2].date}
      />
      <ExpenseItem
        title={props.expArray[3].title}
        amount={props.expArray[3].amount}
        date={props.expArray[3].date}
      />
    </Card>
  );
};

export default Expenses;
