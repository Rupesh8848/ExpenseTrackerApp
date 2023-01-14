import { View, Text, StyleSheet } from "react-native";
import React, { cloneElement } from "react";
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../styles";
import Button from "../components/Button";
import { ExpesesContext } from "../store/expenses-context";

export default function ManageExpense({ route, navigation }) {
  const expenseId = route?.params?.expenseId;
  const isEditing = !!expenseId;

  const { addExpense, deleteExpense, updateExpense } =
    React.useContext(ExpesesContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  function deleteExpenseHandler() {
    deleteExpense(expenseId);
    navigation.goBack(); //go back to previous screen
  }

  function cancelHandler() {
    navigation.goBack(); //go back to previous screen
  }

  function confirmHandler() {
    isEditing
      ? updateExpense(expenseId, {
          description: "Test",
          amount: 99.99,
          date: new Date("2022-12-12"),
        })
      : addExpense({
          description: "Test",
          amount: 99.99,
          date: new Date("2022-12-12"),
        });
    navigation.goBack(); //go back to previous screen
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  deleteContainer: {
    paddingTop: 8,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
