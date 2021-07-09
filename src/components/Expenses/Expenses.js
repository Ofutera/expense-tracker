import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const selectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expArray.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onSelectedYear={selectedYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} onDelete={props.onDelete}/>
      </Card>
    </div>
  );
};

export default Expenses;