import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpesesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const { expense } = React.useContext(ExpesesContext);

  return (
    <ExpensesOutput
      expenses={expense}
      expensesPeriod="Total"
      fallbackText="No expenses registered"
    />
  );
}
