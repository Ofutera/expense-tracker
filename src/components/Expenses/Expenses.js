import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const selectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expArray.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const filteredExpensesHandler = () => {

  }


  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onSelectedYear={selectedYearHandler} />
      <ExpensesList filteredExpenses = {filteredExpenses} onFilteredExpenses = {filteredExpensesHandler} />
    </Card>
  );
};

export default Expenses;
