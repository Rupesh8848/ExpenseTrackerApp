import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../components/ExpensesOutput";

export const ExpesesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: ({ id, description, amount, date }) => {},
});

function expenseReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "add":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...payload, id }, ...state];
    case "update":
      const itemToUpdateIndex = state.findIndex(
        (expense) => expense.id === payload.id
      );
      const itemToUpdate = state[itemToUpdateIndex];
      const updatedItem = { ...itemToUpdate, ...payload.expenseData };
      const updatedExpenses = [...state];
      updatedExpenses[itemToUpdateIndex] = updatedItem;
      return updatedExpenses;
    case "delete":
      return state.filter((expense) => expense.id !== payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "add", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "delete", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "update", payload: { id, expenseData } });
  }

  return (
    <ExpesesContext.Provider
      value={{
        expense: expenseState,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpesesContext.Provider>
  );
}
