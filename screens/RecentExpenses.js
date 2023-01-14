import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpesesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses() {
  const expensesCtx = React.useContext(ExpesesContext);

  const recentExpenses = expensesCtx.expense.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for last 7 days"
    />
  );
}
