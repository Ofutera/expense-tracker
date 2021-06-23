import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)

  const startEditing = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditing}/>}
      
    </div>
  );
};

export default NewExpense;
