import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const selectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expArray.filter((expense) => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onSelectedYear={selectedYearHandler} />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
