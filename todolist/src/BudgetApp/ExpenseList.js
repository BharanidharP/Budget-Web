import ExpenseItem from "./ExpenseItem";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  // const expenses = [
  //   {
  //     id: 123123,
  //     name: "Shopping",
  //     cost: 100,
  //   },
  //   {
  //     id: 123123,
  //     name: "Holiday",
  //     cost: 300,
  //   },
  //   {
  //     id: 123123,
  //     name: "Transportion",
  //     cost: 70,
  //   },
  //   {
  //     id: 123123,
  //     name: "Fuel",
  //     cost: 600,
  //   },
  //   {
  //     id: 123123,
  //     name: "Medicine",
  //     cost: 300,
  //   },
  // ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
