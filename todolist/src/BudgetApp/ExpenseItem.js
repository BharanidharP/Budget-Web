import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}

      <div>
        {props.cost}
        <span className="badge badge-primary badge-pill mr-3"></span>
      </div>
      <TiDelete size="1.5em" onClick={handleDeleteExpense}>
        {" "}
      </TiDelete>
    </li>
  );
};

export default ExpenseItem;
