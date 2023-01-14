import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../styles";

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoes",
    amount: 49.5,
    date: new Date("2023-01-14"),
  },
  {
    id: "e2",
    description: "A pair of Shirts",
    amount: 20,
    date: new Date("2022-12-05"),
  },
  {
    id: "e3",
    description: "Books",
    amount: 30.35,
    date: new Date("2022-10-27"),
  },
  {
    id: "e4",
    description: "Bags",
    amount: 25,
    date: new Date("2022-08-20"),
  },
  {
    id: "e5",
    description: "Foods/Snacks",
    amount: 87.21,
    date: new Date("2022-09-20"),
  },
  {
    id: "e6",
    description: "MoMo",
    amount: 30.35,
    date: new Date("2022-10-27"),
  },
  {
    id: "e7",
    description: "Bike",
    amount: 25,
    date: new Date("2022-08-20"),
  },
  {
    id: "e8",
    description: "Keyboard",
    amount: 87.21,
    date: new Date("2022-09-20"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.outerContaier}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  outerContaier: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1, //takes all availabel space
  },
  fallbackText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
